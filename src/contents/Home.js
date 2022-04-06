import React, {Component} from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/job1.JPG';
import Social from '../components/social';
 class Home extends Component {

    render()
   {
      return (
                <div className="condiv home">
                    <img src={profilepic} className="profilepic" alt="xxx" width="850px" height="600px"></img>
                    <ReactTypingEffect className="typingeffect" text={['I am Jobins Jose. I am Self Taught web developer']} speed={100} eraseDelay={700} />
                    <Social />
                </div>
             )
  
    }

}
export default Home