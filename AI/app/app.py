import pickle
import flask,os, datetime
from flask import request, jsonify
from flask_cors import CORS
import datetime
import pandas as pd


p = os.path.dirname(os.path.abspath(__file__))
MODELS_FOLDER = p+'/models/'

app = flask.Flask(__name__)
app.config["DEBUG"] = True
app.config['MODELS_FOLDER'] = MODELS_FOLDER

CORS(app, resources={r"/*": {"origins": "*"}})

models_names = ["M01AB","M01AE","N02BA","N02BE","N05B","N05C","R03","R06"]

def init_models(drug_name):

    with open(f'models/{drug_name}.pckl', 'rb') as fin:
        model = pickle.load(fin)

    return model

@app.route('/', methods=['GET'])
def home():
    return "<h1>Distant Reading Archive</h1><p>This site is a prototype API for distant reading of science fiction novels.</p>"

@app.route('/api/forcast_time', methods=['POST'])
def api_forcast_time():

    print(request.get_json())
    horizon = 90
    drug_name = request.json['drug_name']

    if drug_name not in models_names:
        return jsonify({'error': True, "message": 'Drug name incorrect'})

    model = init_models(drug_name)

    base = datetime.datetime.today()
    date_list = [base + datetime.timedelta(days=x) for x in range(90)]
    future = pd.DataFrame(data={"ds":[x.strftime("%Y-%m-%d") for x in (date_list)]})
    forecast = model.predict(future)
    data = forecast[['ds', 'yhat']][-horizon:]

    ret = data.to_json(orient='records', date_format='iso')

    return ret

if __name__ == "__main__":
        app.run()

    