import React, { useState, useEffect } from 'react';
import './css/App.css';
import bird from './component/trumpBird1.png';
import TweetBox from './component/tweetBox';




function App() {

  const [tweet, setTweet] = useState("");
  const [random, setRandom] = useState("");
  const [random2, setRandom2] = useState("");



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
      <header className="App-header">
        <img src={bird} className="trump-bird" alt="logo" />


        {renderTweet(tweet)}
        {renderTweet(random)}
        {renderTweet(random2)}
        
      
        {/* <p>Tweet: {tweet}</p>
        <p>Tweet: {random}</p>
        <p>Tweet: {random2}</p> */}



      </header>
    </div>
  );
}

export default App;
