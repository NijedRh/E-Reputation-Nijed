import json
from src.driver_actions.extract_comment import CommentExtractor
from src.driver_actions.extract_text import TextExtractor
from src.driver_actions.extract_reaction import ReactExtractor
from src.sentiment_analyszer.sentiment_post import SentimentPost
from src.driver_actions.extract_date import DateExtractor
#from src.sql_database.db import Db ,DB2
class SavingData :
    def __init__(self,  list_web_element):
        self.list_web_element = list_web_element

    def save_data (self,URL):
        data = dict()
        k = 1
        lp=[]
        lneg=[]
        lneu=[]
        ljaime=[]
        ljadore=[]
        lhaha=[]
        lgr=[]
        l_reaction=[]
        for web_element in self.list_web_element:
            text = TextExtractor(web_element).extract_text()
            comment = CommentExtractor(web_element).extract_comment()
            react = ReactExtractor(web_element).extract_react
            date = DateExtractor(web_element).extract_date()
            data["post_num_" + str(k)] = dict()
            data["post_num_" + str(k)]['titre'] = text[0]
            data["post_num_" + str(k)]['date'] = date[0]
            data["post_num_" + str(k)]['mois'] = date[2]
            data["post_num_" + str(k)]['année'] = date[1]
            data["post_num_" + str(k)]['jour'] = date[3]
            data["post_num_" + str(k)]['topic'] = text[1]
            #data["post_num_" + str(k)]['URL']=URL
            data["post_num_" + str(k)]['react']=dict()
            data["post_num_" + str(k)]['react']['J’aime'] = react[0]
            data["post_num_" + str(k)]['react']['J’adore'] = react[1]
            data["post_num_" + str(k)]['react']['Haha'] = react[2]
            data["post_num_" + str(k)]['react']['Grrr'] = react[3]
            data["post_num_" + str(k)]['commentaires']=dict()
            data["post_num_" + str(k)]['commentaires']['det']  = comment[0]
            data["post_num_" + str(k)]['commentaires']['nbr_comm_positive']=comment[1]
            data["post_num_" + str(k)]['commentaires']['nbr_comm_negative']=comment[2]
            data["post_num_" + str(k)]['commentaires']['nbr_comm_neutre']=comment[3]

            lp.append(data["post_num_" + str(k)]['commentaires']['nbr_comm_positive'])
            lneg.append(data["post_num_" + str(k)]['commentaires']['nbr_comm_negative'])
            lneu.append(data["post_num_" + str(k)]['commentaires']['nbr_comm_neutre'])

            ljaime.append( data["post_num_" + str(k)]['react']['J’aime'] )
            ljadore.append(data["post_num_" + str(k)]['react']['J’adore'])
            lhaha.append( data["post_num_" + str(k)]['react']['Haha'])
            lgr.append( data["post_num_" + str(k)]['react']['Grrr'])

            l_reaction.append([data["post_num_" + str(k)]['react']['J’aime'],data["post_num_" + str(k)]['react']['J’adore'],data["post_num_" + str(k)]['react']['Haha'],data["post_num_" + str(k)]['react']['Grrr']])
            score = SentimentPost()
            score_react= score.analyse_post(l_reaction)
            score_comm =comment[4]
            overall_score =score_react+score_comm
            if overall_score > 0.5:
                conclusion = "positive"
            elif overall_score < -0.1:
                conclusion = "negative"
            else :
                conclusion="neutre"

            data["post_num_" + str(k)]['post_sent_overall']=conclusion

            #insertion = Db(k, data["post_num_" + str(k)]['titre'],data["post_num_" + str(k)]['react']['J’aime '],data["post_num_" + str(k)]['react']['J’adore ' ],data["post_num_" + str(k)]['react']['Haha'], data["post_num_" + str(k)]['react']['Grrr' ],data["post_num_" + str(k)]['commentaires']['det'],data["post_num_" + str(k)]['commentaires']['nbr_comm_positive'],data["post_num_" + str(k)]['commentaires']['nbr_comm_negative'],data["post_num_" + str(k)]['commentaires']['nbr_comm_neutre'])
            #insertion.connect()

            k = k + 1
         

        a_sum=sum(lp)
        b_sum=sum(lneg)
        c_sum=sum(lneu)

        jaime_sum=sum(ljaime)
        jadore_sum=sum(ljadore)
        haha_sum=sum(lhaha)
        gr_sum=sum(lgr)


       


        data["nombre_de_commentaire_totales" ]= {"nbr-com-t" :a_sum+b_sum+c_sum}
        data["nombre_de_commentaire_positifs" ]= a_sum
        data["nombre_de_commentaire_negatifs" ]= b_sum
        data["nombre_de_commentaire_neutres" ]= c_sum
         
        data["nombre_de_jaime"]=jaime_sum
        data["nombre_de_jadore"]=jadore_sum
        data["nombre_de_haha"]=haha_sum
        data["nombre_de_grr"]=gr_sum


        data['URL']=URL

        #insertion2=DB2(data["nombre de commentaire totales" ],a_sum,b_sum,c_sum)
        #insertion2.connect2()

        with open('profile_posts_data.json', 'w', encoding='utf-8') as json_file:
         json.dump(data, json_file, ensure_ascii=False, indent=1 , separators= (',', ':'))
