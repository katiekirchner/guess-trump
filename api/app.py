import sys
import os.path

sys.path.append("/Library/Python/3.7/site-packages")
# print("Here: ", sys.path)

# print("Here2: ", os.path)
# /Library/Python/3.7/site-packages



import time
import markovify
from flask import Flask


# app = Flask(__name__)
app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.route('/')
def index():
    return app.send_static_file('index.html')



@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/tweet')
def generate_tweet():
    # return {'tweet': "test string"}
    with open("data.txt") as tweets:
        text = tweets.read()

    corpus = markovify.NewlineText(text, state_size=5)
    corpus = corpus.compile()

    tweet = corpus.make_short_sentence(350, tries=100)
    return {'tweet': tweet}

