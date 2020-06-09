import time
import markovify
import nltk

from nltk import word_tokenize
from nltk.tokenize import sent_tokenize

from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}


@app.route('/tweet')
def generate_tweet():
    with open("tw.txt") as tweets:
        text = tweets.read()

    corpus = markovify.NewlineText(text, state_size=5)
    tweet = corpus.make_short_sentence(350, tries=100)
    return {'tweet': tweet}

