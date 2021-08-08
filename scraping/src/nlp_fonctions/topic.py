from gensim.summarization import keywords
class Topics :

    def topic_model(self , sample):
       a=keywords(sample, words=1)
       return  str(a)