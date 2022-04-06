import React, { Component } from 'react';
import Widecard from '../components/widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="ADVANCED WEB DEVELOPMENT" where="Oakton Community College" from="July 2017" to="March 2019"/>
<Widecard title="HIGH SCHOOL" where="Progressive English High School" from="2008" to="2010"/>
</div>
)
}
}
export default Education