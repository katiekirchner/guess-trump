import React, {Component, useState, useEffect } from 'react';
// import React from 'react';

import './css/App.css';
import bird from './component/trumpBird1.png';
import TweetBox from './component/tweetBox';

var shuffle = require('shuffle-array');


  class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        fakeTweet: " ",
        tweet1: " ",
        tweet2: " ",
        previous:" ",
        correct: 0,
        total: 0,
        accuracy: 0,
        allTweets: [" ", " ", " "]  
      };
    }


    componentDidMount(){
      
      this.getTweets();
      this.getTweets();
   }





    getTweets(){

        fetch('/tweet').then(res => res.json()).then(data => {
          this.setState({fakeTweet: "faaaaaaaake    " + data.tweet});
        });

        fetch('/random').then(res => res.json()).then(data => {
          this.setState({tweet1: data.random});
        });

        fetch('/random').then(res => res.json()).then(data => {
          this.setState({tweet2: data.random});
          this.setAllTweets();
        });

    }


  

    setAllTweets(){      
        var num = (Math.floor(Math.random() * 3));  

        if (num === 0){
          this.setState({allTweets: [ this.state.fakeTweet, this.state.tweet1, this.state.tweet2]});
        } else if (num === 1){
          this.setState({allTweets: [ this.state.tweet1, this.state.fakeTweet, this.state.tweet2]});
        } else if (num === 2){
          this.setState({allTweets: [ this.state.tweet1, this.state.tweet2, this.state.fakeTweet]});
        }
    }


    counter(value){
       var tot = this.state.total + 1;
       this.setState({previous: this.state.fakeTweet})

       this.getTweets();

        if (this.state.allTweets[value] === this.state.fakeTweet){

          var cor = this.state.correct+1;
          this.setState({correct: cor});

          var acc = ((cor/tot)*100).toPrecision(4);
          this.setState({accuracy: acc});
        } else {

          var accurate = ((this.state.correct/tot)*100).toPrecision(4);

          this.setState({accuracy: accurate});
        }


      this.setState({total: tot});
      // this.setState({previous: this.state.fakeTweet})

      this.renderTweetBox();
      // this.setAccuracy();
      // this.getTweets();
    }



    renderTweetBox(){

        return (

            <div className="tweet-container">   

              <div onClick={()=> this.counter(0)}>
                <TweetBox text={this.state.allTweets[0]}/>
              </div> 

              <div onClick={()=> this.counter(1)}>
                < TweetBox text={this.state.allTweets[1]}/>
              </div>

              <div onClick={()=> this.counter(2)}>
                <TweetBox text={this.state.allTweets[2]}/>
              </div>
            </div>
          );
        
    }



    render (){

      return (

          <div className="App">
            <header className="header">
              <img src={bird} className="trump-bird" alt="logo" />
            </header>


            <div className="grid-container">
                <div className="left-panel">

                  <p className="question">
                  Can you pick the fake Tweet?
                  </p>


                  <p className="desc">
                    Using a corpus of the entire collection of
                    Donald Trump's Tweets, this app generates a Markov chain. 
                  </p>

                  <p className="desc">
                    From the Markov chain, a sentence (or Tweet in this case)
                    is created.

                  </p>

                  <p className="desc">
                    The fake Tweet generated from the Markov chain is placed
                    amongst two real Tweets randomly selected from Donald Trump's 
                    entire Tweet history.
                  </p>

                

                </div>

                {this.renderTweetBox()}

                {/* <div className="tweet-container">   

                  <div onClick={()=> this.counter(0)}>
                    <TweetBox text={this.state.allTweets[0]}/>
                  </div> 

                  <div onClick={()=> this.counter(1)}>
                    < TweetBox text={this.state.allTweets[1]}/>
                  </div>

                  <div onClick={()=> this.counter(2)}>
                    <TweetBox text={this.state.allTweets[2]}/>
                  </div>
                </div> */}

                <div className="right-panel">
                    <p className="acc">
                      Accuracy: {this.state.accuracy}%
                    </p>
                    <p>
                      Correct: {this.state.correct}  
                      &nbsp;&nbsp;&nbsp;  
                      Total: {this.state.total} 
                    </p>

                    <br></br>
                    <button className="reload-button" onClick={() => this.getTweets()}> Reload Tweets </button>      
                
                    <hr></hr>

                    <p> Previous fake Tweet: </p>
                    <p> {this.state.previous} </p>
                </div>

              </div>
          </div>
      );
    }
  } 


export default App;
