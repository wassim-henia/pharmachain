var paraChainSC = artifacts.require("paraChain");

module.exports = function(deployer) {
  // Deploy the SolidityContract contract as our only task
  deployer.deploy(paraChainSC);
};