import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// import Register from "./component/register.js";


function App() {
  const [currentTime, setCurrentTime] = useState(0);

  const [tweet, setTweet] = useState("");

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);


  useEffect(() => {
    fetch('/api/tweet').then(res => res.json()).then(data => {
      setTweet(data.tweet);
    });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
        <p>The current time is {currentTime}.</p>
        <p>Tweet: {tweet}</p>

      </header>
    </div>
  );
}

export default App;
