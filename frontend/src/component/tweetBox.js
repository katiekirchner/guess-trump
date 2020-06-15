// import React, { useState, useEffect } from 'react';
import React from 'react';

import '../css/tweet.css';
import pic from './avatar.png';

class TweetBox extends React.Component {



    render(){
        return(

            <div className="tweetBox">
                <img src={pic} className="avatar" alt="profile-pic" />
               
                <div className="handle-holder">
                    <p className="name">Donald "Markov" Trump </p>

                    <p className="handle"> &nbsp; @notTheRealDonaldTrump</p>

                </div>   

                <div className="text-holder">
                    <p className="tweetText">{this.props.text}</p>
                </div>
            </div>

        );
    }

}


export default TweetBox