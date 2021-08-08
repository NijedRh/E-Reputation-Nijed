import json
from flask.json import jsonify
import pymongo
import numpy as np

from pymongo import MongoClient
from pymongo.common import RETRY_READS

class post_data :
    def __init__(self) -> None:
        pass
    def pydata(self):

        myclient = MongoClient("mongodb://localhost:27017/") 
        

        db = myclient["min"]

        Collection = db["dataaa"]

        with open('profile_posts_data.json','r', encoding='utf-8') as file:
            file_data = json.load(file)
            print(file_data)
            


        if isinstance(file_data,list):
            Collection.insert_many(file_data)  
         
        else:
            Collection.insert_one(file_data)      


        return db  


   

    def getdata(self) :


        myclient = MongoClient("mongodb://localhost:27017/") 
        

        db = myclient["min"]

        Collection1 = db["dataaa"]
        #print (list(Collection1.find()))
        documents = Collection1.find().sort("_id", -1).limit(1)
        #x = Collection1.find({},{'titre:': 1, })
        #x= Collection1.find({},{'_id':0})
  
        #for data in x:
          #return data 

        return list(documents)
   
   
   


    
    def getdetails(self,URL):
       
        myclient = MongoClient("mongodb://localhost:27017/") 
        

        db = myclient["min"]

        Collection1 = db["dataaa"]


        '''def commMapper(post):
            data = list(post.items())
            an_array = np.array(data)
            print (an_array[0][1])
            toret = map(lambda p: p[1][1], an_array)

            return toret'''
 
        x= Collection1.find({'URL':URL}).sort("_id", -1).limit(1)
        return list(x)
                #Collection1.find({},{'commentaires.nbr_comm_positive':1,'_id':0}).sort("_id", -1).limit(1)
            
        #for z in x :
        #result = map(commMapper, x)

           
        #return result


             #i+=1
                #for y in x.values():
                    #for z in y.values():
                #list(x).append("postnum"+ str(i))
                #print (list(x))
                #return list(x)
                #for y in x:
                
                #for z in y:
        

        

        



#ok=post_data().getdata()
#okk= post_data().getdetails()

 
#okk =post_data().getdetails("https://www.facebook.com/Banquemondiale/")
#print (okk)


