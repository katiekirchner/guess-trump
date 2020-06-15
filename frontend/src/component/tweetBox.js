// import React, { useState, useEffect } from 'react';
import React from 'react';

import '../css/tweet.css';
import pic from './avatar.png';

class TweetBox extends React.Component {

    // date(){
    //     var timestamp = Date.now();
    //     var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          
    //     var d = new Date(timestamp);
  
    //     var date = d.getDate();
    //     var year = d.getFullYear();
    //     var month = d.getMonth();
  
    //     return `${months[month]} ${date}, ${year}`;
    // }

    render(){
        return(

            <div className="tweetBox">
                <img src={pic} className="avatar" alt="profile-pic" />
                <div className="handle-holder">
                    <p className="handle">@notTheRealDonaldTrump</p>
                </div>   

                <div className="text-holder">
                    <p className="tweetText">{this.props.text}</p>
                </div>
            </div>

            // <button className="tweetBox" onClick={()=> console.log(this.state.isFake)}>
            //     <img src={pic} className="avatar" alt="profile-pic" />
            //     <div className="handle-holder">
            //         <p className="handle">@notTheRealDonaldTrump</p>
            //         <p>{this.props.isFake}</p>

            //     </div>   

            //     <div className="text-holder">
            //         <p className="tweetText">{this.props.text}</p>
            //     </div>
            // </button>


        );
    }

}


export default TweetBox