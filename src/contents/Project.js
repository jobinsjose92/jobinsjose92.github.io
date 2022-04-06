import React, { Component } from 'react';
import project1 from '../img/OIP.jfif';
import project2 from '../img/oip3.jpg';
import calc from '../img/calc.png';
import ftoc from '../img/ftoc.png';
import gn from '../img/globalnews.webp';
import quote from '../img/quote.jpg';

class Project extends Component {
render() {
      return (
            <div className="condiv project" >
             <a href='https://github.com/jobinsjose92/AndroidCalculator'><img  src={calc} className="project1" alt="xxx" width="300" height="200"></img></a>
             <a href='https://github.com/jobinsjose92/AndroidTempConvert'><img  src={ftoc} className="project1" alt="xxx" width="300" height="200"></img></a>
             <a href='https://github.com/jobinsjose92/NewsFrontPage'><img  src={gn} className="project1" alt="xxx" width="300" height="200"></img></a>
             <a href='https://github.com/jobinsjose92/QuoteGenerator'><img  src={quote} className="project1" alt="xxx" width="300" height="200"></img></a>
             <img  src={project1} className="project1" alt="xxx"></img>
             <img  src={project2} className="project1" alt="xxx"></img>

</div>
);
}
}
export default Project