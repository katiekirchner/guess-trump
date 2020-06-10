import React, { useState, useEffect } from 'react';
import '../css/tweet.css';
import pic from './avatar.png';

class TweetBox extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         text: " placeholder  placeholder  placeholder  placeholder  placeholder ",
    //     }
    
    // }


    render(){
        return(

            <div className="tweetBox">
                <img src={pic} className="avatar" alt="profile-pic" />
                <p className="tweetText">{this.props.text}</p>

                {/* <p className="tweetText">{this.state.text}</p> */}


            </div>


        );
    }

}


export default TweetBox