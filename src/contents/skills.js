import React, { Component } from 'react'
class Skills extends Component {
constructor(props)
{
super(props);
this.state={
'myskills':['HTML','CSS','JS','SPRING FRAMEWORK','PHP','REACT JS','PYTHON','JAVA','C#','ASP.NET']
};
}
render() {
return (
<div className="condiv skills">
<h1 className="subtopic">Skills</h1>
<ul>
{this.state.myskills.map((value)=>{
return <li>{value}</li>
})}
</ul>
</div>
)
}
}
export default Skills