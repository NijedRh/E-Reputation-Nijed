
import json
from flask import Flask, request,jsonify,Response
from bson.json_util import dumps

import logging
from flask_cors import cross_origin, CORS
from src.nosql.pydata import post_data

from src.driver_actions.extract_page import PageExtractor



app = Flask(__name__)
CORS(app)
app.config['DEBUG'] = True

@app.after_request
def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  return response

@app.route('/',methods=['GET', 'POST'])
def home() :
    return 'hello world!'


@app.route('/post_url', methods=['POST'])
def is_decideur1(): 
    data = request.get_json() #data dans le body # bech tkoun forme json feha un clé url wl valeur c'est une chaine feha url
    URL = data["URL"] #url dans le body
    page = PageExtractor(URL)
    page.scrap_fb()
    ok= post_data().pydata()
    documents =post_data().getdata()
    
    #return jsonify({'cursor': documents})
    #page_sanitized = json.loads(dumps(documents))
    #return page_sanitized 
    json_data = dumps(documents, indent = 2) 
    return json_data

@app.route('/details_py', methods=['POST'])
def is_decide():
  data = request.get_json() #data dans le body # bech tkoun forme json feha un clé url wl valeur c'est une chaine feha url
  URL = data["URL"]
  class1 = post_data()
  
  #okk= post_data().pydata()
  documents =class1.getdetails(URL)
  json_data = dumps(documents, indent = 2) 
  return json_data


"""
### scraping des societes qui se trouvent en france et possedent plusieurs salariés tunisiens
@app.route('/Scrap_posts_company/<path:company_url>', methods=['GET'])
def allpost(company_url):
	scrap_company_all_posts(company_url) #mel mostahsen tamel request.get_json khatr bad chtsir mochkla fl front fl slachet match yfhm enehi lurl wenehi lapi
	return company_url +" scraped successfully" 
"""


if __name__ == '__main__':
 #app.run(port=5000) 
 app.run(debug=True)
