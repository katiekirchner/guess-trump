import React, { useState, useEffect } from 'react';
import './css/App.css';
import bird from './component/trumpBird1.png';
import TweetBox from './component/tweetBox';




function App() {

  const [tweet, setTweet] = useState("");
  const [random, setRandom] = useState("");
  const [random2, setRandom2] = useState("");

  function getTweets(){

    fetch('/tweet').then(res => res.json()).then(data => {
      setTweet(data.tweet);
    });

    fetch('/random').then(res => res.json()).then(data => {
      setRandom(data.random);
    });

    fetch('/random').then(res => res.json()).then(data => {
      setRandom2(data.random);
    });


  }


  useEffect(() => {
    fetch('/tweet').then(res => res.json()).then(data => {
      setTweet(data.tweet);
    });
  }, []);

  useEffect(() => {
    fetch('/random').then(res => res.json()).then(data => {
      setRandom(data.random);
    });
  }, []);

  useEffect(() => {
    fetch('/random').then(res => res.json()).then(data => {
      setRandom2(data.random);
    });
  }, []);


  function renderTweet(i){
    return <TweetBox text={i} />;
  }


  return (
    <div className="App">
      <header className="header">
        <img src={bird} className="trump-bird" alt="logo" />
      </header>



      <div className="grid-container">
          <div className="left-panel">
            <p className="font20">
              127.0.0.1 - - [10/Jun/2020 13:25:58] "GET /tweet HTTP/1.1" 200 -
              127.0.0.1 - - [10/Jun/2020 13:26:01] "GET /random HTTP/1.1" 200 -
              127.0.0.1 - - [10/Jun/2020 13:26:01] "GET /random HTTP/1.1" 200 -
              127.0.0.1 - - [10/Jun/2020 13:26:04] "GET /tweet HTTP/1.1" 200 -
              127.0.0.1 - - [10/Jun/2020 13:29:32] "GET /random HTTP/1.1" 200 -

            </p>
          </div>


          <div className="tweet-container">
            {renderTweet(tweet)}
            {renderTweet(random)}
            {renderTweet(random2)}
          </div>

          <div className="right-panel">
              <button className="reload-button" onClick={() => getTweets()}> Reload </button>      
          </div>

        </div>
    </div>

  );
}

export default App;
