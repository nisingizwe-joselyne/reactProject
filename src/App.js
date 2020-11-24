import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Body from './components/Body.js';
import About from './components/About.js';
import Footer from './components/Footer.js';
// import Posts from './components/users/Posts.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Signup from './components/Registration.js';
import Login from './components/Login.js';
import Wlcme from './components/Wlcme';
import Welcome from './components/users/Welcome';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Body/>
        </Route>
        <Route path="/about-us">
           <About/>
          
        </Route>
        <Route path="/user-login">
           <Login/>
          
        </Route>
        {/* <Route path="/nav">
           <Navbar/>
          
        </Route> */}
        <Route path='/user-signup'>
          <Signup/>
        </Route>
        <Route path='/user-welcome'>
          <Welcome/>
        </Route>
        {/* <Route path='/posts/admin'>
          <Posts/>
        </Route> */}
      </Switch>
    </Router> 
  );
}

export default App;
