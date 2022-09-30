pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/AccessControl.sol";

contract paraChain is AccessControl {

 bytes32 public constant Admin_ROLE = keccak256("DPM");
 bytes32 public constant INEAS_ROLE = keccak256("INEAS");
 bytes32 public constant CNIP_ROLE = keccak256("CNIP");
 bytes32 public constant CP_ROLE = keccak256("Central Pharmacy");
 bytes32 public constant Supplier_ROLE = keccak256("supplier");
 bytes32 public constant Pharmacy_ROLE = keccak256("Pharmacy");

 //uint256 public s = 0; 
 enum State{ Available , SoldOut}
 enum TypeOf{ External , Internal} 
 uint threshold = 10; // Global param set by DPM


constructor(address CNIP , address CentralP , address INEAS)  {
        _setupRole(Admin_ROLE, msg.sender);
         _setupRole(CNIP_ROLE, CNIP);
        _setupRole(CP_ROLE, CentralP);
        _setupRole(INEAS_ROLE, INEAS);

    }

struct product {

    uint product_id;
    uint256 price;
    TypeOf typeOf;
    uint quantity;
    //State status;
    //uint expdate;
}

product[] public orders;
//product[] public supply;

mapping (address => product[]) Orders;
mapping (address => product[]) Supplies;
 
//mapping (address => supplier[]) s1;
uint256[] public importation;
address[] public suppliers;
address[] public pharmacies;
//uint256[] public claims;

mapping (address => bool) Suppliers;
mapping (address => bool) Pharmacies;
mapping (address => uint256[]) Claims;

//other choices when product is not available. 
mapping(uint => uint) Alternatives;

//Depends on market changes
function SetThreshold(uint256 seuil) public  onlyRole(Admin_ROLE) {
   threshold = seuil;
}

//Only INEAS can set this.
function SetAlternatives(uint256 product_id , uint256 alter) public onlyRole(INEAS_ROLE) {
   Alternatives[product_id] = alter;
}


//Role granted only by DPM (Admin)


function grantRole(bytes32 role,address member) public override onlyRole(Admin_ROLE) {
        _grantRole(role, member);
        if (role == Pharmacy_ROLE){
            pharmacies.push(member);
            Pharmacies[member] = true;
        }
        else if (role == Supplier_ROLE){

            suppliers.push(member);
            Suppliers[member] = true;

        }
    }


function PassOrder(uint id, uint price, uint quantity, TypeOf typeOf) external onlyRole(Pharmacy_ROLE){
        paraChain.product memory p = product(id,price,typeOf,quantity);
        Orders[msg.sender].push(p);
  
}

function AcceptOrder(address Buyer ,uint product_id , uint order_id) external onlyRole(Supplier_ROLE){
        //require(Orders[address][order_id].state != State.Approved)
        require (Pharmacies[Buyer]);
 

  
}
    
function RestrictOrder(address Buyer ,uint product_id , uint order_id) external onlyRole(CP_ROLE){
        //require(Orders[address][order_id].state != State.Approved)
        require (Suppliers[Buyer]);
       // param restriction depends on the drugs on market
        require (Supplies[Buyer][product_id].quantity < threshold);

        uint InReserve =Supplies[msg.sender][product_id].quantity;
        uint AmountToBuy =Orders[Buyer][product_id].quantity;

        if(InReserve >= AmountToBuy ){
        Supplies[msg.sender][product_id].quantity = InReserve -  AmountToBuy;
        Supplies[Buyer][product_id].quantity = Supplies[Buyer][product_id].quantity + AmountToBuy;
        }



}

function ShortageClaim(uint product_id ) external {
        require (Suppliers[msg.sender] || Pharmacies[msg.sender]);
        //param restriction depends on the drugs on market
        require (Supplies[msg.sender][product_id].quantity < threshold);
        //Add claim
        //Ask INEAS for alternative if there is one.
        Claims[msg.sender].push(product_id);

    }

function ClaimHandling(uint product_id ) external onlyRole(CP_ROLE) {
        
        require (Supplies[msg.sender][product_id].quantity < threshold);
        //Add to importation list so that Sephire can get it.
        importation.push(product_id);
    }    

//getters

    function getOrders() public view returns(product [] memory ) {
        return (orders);
    }

    function getPharmacies() public view returns(address [] memory ) {
        return (pharmacies);
    }
    function getSuppliers() public view returns(address [] memory ) {
        return (suppliers);
    }
  

}