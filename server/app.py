from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

hrt_data = pd.read_csv('./access_clean.csv', encoding='latin-1')
surgeon_data = pd.read_csv('./surgeons_clean.csv', encoding='latin-1')
hrt = hrt_data.values.tolist()
surgeons = surgeon_data.values.tolist()

for i in range(len(hrt)):
    for j in range(7):
        if type(hrt[i][j]) == float:
            hrt[i][j] = ''

for i in range(len(surgeons)):
  for j in range(6):
    if type(surgeons[i][j]) == float:
      surgeons[i][j] = ''

access_dict = { 'items': [] }
for item in hrt:
  access_dict['items'].append(
    { 
      'country': item[0],
      'state': item[1],
      'city': item[2],
      'process': item[3],
      'clinic': item[4],
      'doctors': item[5],
      'tags': item[6]
    }
  )

surgeons_dict = { 'items': [] }
for item in surgeons:
  surgeons_dict['items'].append(
    {
      'country': item[0],
      'state': item[1],
      'city': item[2],
      'surgeon': item[3],
      'clinic': item[4],
      'procedures': item[5]
    }
  )

@app.route('/hrt-access', methods=['GET'])
def access_response():
  response = jsonify(access_dict)
  response.headers.add('Access-Control-Allow-Origin', '*')
  return response

@app.route('/surgeons', methods=['GET'])
def surgeons_response():
  response = jsonify(surgeons_dict)
  response.headers.add('Access-Control-Allow-Origin', '*')
  return response


app.run(port=5000)
