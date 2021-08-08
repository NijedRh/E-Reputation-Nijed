'''from src.driver_actions.extract_page import PageExtractor

def main_process():
    page = PageExtractor("https://www.facebook.com/Banquemondiale/")
    page.scrap_fb()

if __name__ == '__main__':
    main_process()'''


from typing import Collection
from flask import Flask, app,request,jsonify

from flask_cors import cross_origin, CORS
import pymongo
from src.nosql.pydata import post_data

from src.driver_actions.extract_page import PageExtractor

main = Flask(__name__)
CORS(main)

#mongo = pymongo(main)

#def hello_world():
   # return "<p>Hello, World!</p>"
#@main.route('/getPythonData', methods=['POST'])
'''@main.route('/dataaaa', methods=['POST'])
def getPythonData1():
    #print("hellooooooooo world")
    data = request.get_json() 
    URL = data["url"] 
    return jsonify({"l'url" : URL})
    #page = PageExtractor(URL)
    #page.scrap_fb()
    #ok= post_data().pydata()
    #documents =post_data().getdata()
    #return jsonify(documents)'''



@main.route('/post_url', methods=['POST'])
def is_decideur1(): 
    #data = request.get_json() 
    #URL = data["url"] 
    #return jsonify({"l'url" : URL})
       #print("hellooooooooo world")
   
    #return jsonify({"l'url" : URL})
    #page = PageExtractor(URL)
    #page.scrap_fb()
    #ok= post_data().pydata()
    # documents =post_data().getdata()
    return jsonify({"documents":"hhhhh"})

   
    #data= request.get_json()
    #data=mongo.db..find()
    #print([x for x in mongo.db.data.find({})])
    #return jsonify([i for i in mongo.db.data.find({})])
    #return URL +" scraped successfully" 


if __name__ == '__main__':

   #getPythonData(URL)
   
   main.run(debug=True)
   


