import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Menue from './components/Menue';
import Footer from './components/Footer';
import './App.css';

function App() {
    document.onreadystatechange = function() { 
        if (document.readyState !== "complete") { 
            document.querySelector("body").style.visibility = "hidden"; 
            document.querySelector("#loader").style.visibility = "visible"; 
        } else { 
            document.querySelector("#loader").style.display = "none"; 
            document.querySelector("body").style.visibility = "visible"; 
        } 
    };
    return (
        <Router>
            <div id="loader" className="center"></div> 
            <Header/>
            <Switch>
                <Route exact path = "/">
                    <Home/>
                </Route>
                <Route path="/menue">
                    <Menue/>
                </Route>
                <Route path="/contact-us">
                    <Contact/>
                </Route>
                <Route path="/blog">
                    <Blog/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App;
