import sys
import os.path

sys.path.append("/Library/Python/3.7/site-packages")

import time
import markovify
import random
from flask import Flask



app = Flask(__name__, static_folder='./frontend/build', static_url_path='/')


@app.route('/')
def index():
    return app.send_static_file('index.html')



@app.route('/time')
def get_current_time():
    return {'time': time.time()}






def make_corpus():

    global corpus   

    with open("data.txt") as tweets:
        text = tweets.read()

    corpus = markovify.NewlineText(text, state_size=5)
    corpus = corpus.compile()

    return corpus





@app.route('/tweet')
def generate_tweet():
    # return {'tweet': "test string"}
    with open("data.txt") as tweets:
        text = tweets.read()

    corpus = markovify.NewlineText(text, state_size=5)
    corpus = corpus.compile()

    tweet = corpus.make_short_sentence(350, tries=100)
    return {'tweet': tweet}


@app.route('/random')
def get_real_tweet():
    s=open("data.txt","r")
    m=s.readlines()
    l=[]
    for i in range(0,len(m)-1):
        x=m[i]
        z=len(x)
        a=x[:z-1]
        l.append(a)
    l.append(m[i+1])
    o=random.choice(l)
    
    return {'random': o}


