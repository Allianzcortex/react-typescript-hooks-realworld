from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import requests


# from utils import execute_query, create_connect



app = Flask(__name__, static_folder='/static')
cors = CORS(app)


@app.route('/api/v1/register',methods=['POST','GET'])
@cross_origin()
def register():
   return '12345' # fake token

@app.route('/recommendList',methods=['POST','GET'])
@cross_origin()
def return_recommendList():
   import time
#    time.sleep(2)
   res= {
"code": 200,
"category": 0,
"result":[{
"id": 2414139310,
"type": 0,
"name": "aaaaaa",
"copywriter": "aaaaaaa",
"picUrl": "https://p1.music.126.net/1Ni7l_LGaPudsUdzRTBc6w==/109951164524502317.jpg",
"canDislike": False,
"trackNumberUpdateTime": 1577536010308,
"playCount": 426777,
"trackCount": 32,
"highQuality": False,
"alg": "featured"},
{
"id": 2995276916,
"type": 0,
"name": "bbbbbbbbbb",
"copywriter": "bbbbbbbbbb",
"picUrl": "https://p2.music.126.net/Azc1Qo0Dgda9Dw6q78HuAw==/109951164380061983.jpg",
"canDislike": False,
"trackNumberUpdateTime": 1578559717276,
"playCount": 769741,
"trackCount": 42,
"highQuality": False,
"alg": "featured",
}]
   }
   return jsonify(res)