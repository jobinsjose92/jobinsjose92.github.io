import React from 'react';
import './App.css';
import{
BrowserRouter as Router,
Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education'
import Skills from './contents/skills';
import Contact from './contents/Contact';
import Project from './contents/Project'
function App() {
return (
<Router>

<div className="App">

     <Navbar />

<Route exact path="/">
     <Home />
</Route>
<Route exact path="/About">
    <About />
</Route>
<Route path="/Education">
   <Education />
</Route>
<Route path="/skills">
   <Skills />
</Route>
<Route path="/Contact">
   <Contact />
</Route>
<Route path="/Project">
   <Project />
</Route>
</div>
</Router>
);
}
export default App;