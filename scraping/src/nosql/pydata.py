import json
from pymongo import MongoClient


class post_data:
    def __init__(self) -> None:
        pass

    def pydata(self):

        myclient = MongoClient("mongodb://localhost:27017/")

        db = myclient["min"]

        Collection = db["dataaa"]

        with open('profile_posts_data.json', 'r', encoding='utf-8') as file:
            file_data = json.load(file)
            print(file_data)

        if isinstance(file_data, list):
            Collection.insert_many(file_data)

        else:
            Collection.insert_one(file_data)

        return db

    def getdata(self):

        myclient = MongoClient("mongodb://localhost:27017/")

        db = myclient["min"]

        Collection1 = db["dataaa"]

        documents = Collection1.find().sort("_id", -1).limit(1)

        return list(documents)

    def getdetails(self, URL):

        myclient = MongoClient("mongodb://localhost:27017/")

        db = myclient["min"]

        Collection1 = db["dataaa"]

        x = Collection1.find({'URL': URL}).sort("_id", -1).limit(1)
        return list(x)
