from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

data = pd.read_csv('./access_clean.csv', encoding='latin-1')
hrt = data.values.tolist()

for i in range(len(hrt)):
    for j in range(7):
        if type(hrt[i][j]) == float:
            hrt[i][j] = ''

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
    }
  )

@app.route('/hrt-access', methods=['GET'])
def access():
  response = jsonify(access_dict)
  response.headers.add('Access-Control-Allow-Origin', '*')
  return response

app.run(port=5000)
