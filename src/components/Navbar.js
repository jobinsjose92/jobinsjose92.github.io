import React, {Component}from  "react";

import Navitem from "./Navitem";

class Navbar extends Component{

constructor(props)
{
    super(props);
    this.state={
        'NavItemActive':''

}
}
activeitem=(x)=>
{
    console.log(x);
if(this.state.NavItemActive.length>0)
{
    document.getElementById(this.state.NavItemActive).classList.remove('active');
}
this.setState({'NavItemActive':x},() =>{
    document.getElementById(this.state.NavItemActive).classList.add('active');
}

);

};

render(){
    return (
        
     
         

        <nav>
        <ul>
            
        <Navitem  item="Home" tolink="/" activec={this.activeitem}></Navitem>
        
        <Navitem item="About" tolink="/About" activec={this.activeitem}></Navitem>
        <Navitem item="Education" tolink="/Education" activec={this.activeitem}></Navitem>
        <Navitem item="Skills" tolink="/skills" activec={this.activeitem}></Navitem>
        <Navitem item="Contact" tolink="/Contact" activec={this.activeitem}></Navitem>
        <Navitem item="Project" tolink="/Project" activec={this.activeitem}></Navitem>
        </ul>
        </nav>
    )
}

} 

export default Navbar