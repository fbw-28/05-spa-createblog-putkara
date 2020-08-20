import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from "./components/Navigation";
import "./App.css";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
    
        <div>
          
          
          <Navigation/>
          <nav >
           
          
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
   
      </BrowserRouter>
    );
  }
}

export default App;