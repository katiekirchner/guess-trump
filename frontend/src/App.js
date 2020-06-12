import React, {Component, useState, useEffect } from 'react';
import './css/App.css';
import bird from './component/trumpBird1.png';
import TweetBox from './component/tweetBox';





// function App() {

//   const [fakeTweet, setFakeTweet] = useState("");
//   const [random, setRandom] = useState("");
//   const [random2, setRandom2] = useState("");


//   const [correct, setCorrect] = useState(0);
//   const [total, setTotal] = useState(0);
//   const [accuracy, setAccuracy] = useState(0);

//   const [allTweets, setAllTweets] = useState([]);



//   function getTweets(){
//       fetch('/tweet').then(res => res.json()).then(data => {
//         setFakeTweet(data.tweet);
//         setAllTweets([data.tweet]);
//       });

//       fetch('/random').then(res => res.json()).then(data => {
//         setRandom(data.random);
//         setAllTweets(allTweets => [...allTweets, data.tweet]);

//       });

//       fetch('/random').then(res => res.json()).then(data => {
//         setRandom2(data.random);
//         setAllTweets(allTweets => [...allTweets, data.tweet]);

//       });


//       // setAllTweets([fakeTweet, random, random2]);
//   }



//   useEffect(() => {
//     getTweets();
//   }, []);



//   function counter(){
//     console.log("test")
//     setTotal(total+1);
//   }


//   function returnTest(){
//     return (allTweets);

//   }

//   function renderTweetBox(text){
//     return (
//         <div onClick={()=> counter()}>
//           <TweetBox text={text}/>
//         </div>
//       );
//   }


//   return (
//     <div className="App">
//       <header className="header">
//         <img src={bird} className="trump-bird" alt="logo" />
//       </header>


//       <div className="grid-container">
//           <div className="left-panel">
//             <p className="font20">
//               Using a corpus of the entire collection of
//               Donald Trump's Tweets, a Tweet in the  
//             </p>

//             <p className="font20">
//               The fake Tweet generated from the Markov chain is placed
//               amongst two real Tweets randomly selected from Donald Trump's 
//               entire Tweet history.
//             </p>

//             <p className="font20">
//              Can you pick the fake Tweet?
//              {returnTest()}
//             </p>


//             <p>Total: {total} </p>
//           </div>


//           <div className="tweet-container">
//             {renderTweetBox(fakeTweet)}
//             {renderTweetBox(random)}
//             {renderTweetBox(random2)}
//           </div>

//           <div className="right-panel">
//               <button className="reload-button" onClick={() => getTweets()}> Reload </button>      
//           </div>

//         </div>
//     </div>

//   );
// }


  class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        fakeTweet: '',
        correct: 0,
        total: 0,
        accuracy: 0,
        allTweets: []    
      };
    }

    componentDidMount(){
      this.getTweets();
      // fetch('/tweet').then(res => res.json()).then(data => {
      //   // this.setState({fakeTweet: data.tweet});
      //   this.state.allTweets.push(data.tweet);

      // });

      // fetch('/random').then(res => res.json()).then(data => {
      //   this.state.allTweets.push(data.random);
      // });

      // fetch('/random').then(res => res.json()).then(data => {
      //   this.state.allTweets.push(data.random);
      // });

      // console.log(this.state.allTweets)
   }

  
  

    getTweets(){
        fetch('/tweet').then(res => res.json()).then(data => {
          this.setState({fakeTweet: data.tweet});
          // this.setState({allTweets[0]: data.tweet})
          this.state.allTweets[0]=(data.tweet);

        });

        fetch('/random').then(res => res.json()).then(data => {
          this.state.allTweets[1]=(data.random);
        });

        fetch('/random').then(res => res.json()).then(data => {
          this.state.allTweets[2]=(data.random);
        });

        // this.state.allTweets.sort(() => 0.5 - Math.random());


        // this.state.allTweets.push(this.state.fakeTweet);

        // this.setState(_.shuffle(this.state.allTweets));
        // setAllTweets([fakeTweet, random, random2]);
    }



    counter(num){

      if (this.state.allTweets[num] === this.state.fakeTweet){
        this.setState({correct: this.state.correct+1});
      }

      this.setState({total: this.state.total+1});
      this.setAccuracy();
    }

    setAccuracy(){
      
      var num = (this.state.total === 0) ? 0 : (((this.state.correct/this.state.total)*100).toPrecision(4));
      this.setState({accuracy: num});
    }

 

    renderTweetBox(){
      console.log(this.state.allTweets);

        // this.getTweets();
        return (
            <div className="tweet-container">   
                {/* <TweetBox onClick={()=> this.counter(0)} text={this.state.allTweets[0]}/>
                <TweetBox onClick={()=> this.counter(1)} text={this.state.allTweets[1]}/>
                <TweetBox onClick={()=> this.counter(2)} text={this.state.allTweets[2]}/> */}

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
                  <p className="desc">
                    Using a corpus of the entire collection of
                    Donald Trump's Tweets, this app generates a Markov chain. 
                  </p>

                  <p className="desc">
                    From the Markov model, a sentence (or Tweet in this case)
                    is created.

                  </p>

                  <p className="desc">
                    The fake Tweet generated from the Markov chain is placed
                    amongst two real Tweets randomly selected from Donald Trump's 
                    entire Tweet history.
                  </p>

                  <p className="desc">
                  Can you pick the fake Tweet?
                  </p>

                </div>

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

                {/* {this.renderTweetBox()} */}

                {/* <div className="tweet-container">
                 <TweetBox text={this.state.fakeTweet}/>

                 {this.renderTweetBox()}



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

                    <button className="reload-button" onClick={() => this.getTweets()}> Reload </button>      
                 
                </div>

              </div>
          </div>
      );
    }
  } 


export default App;
