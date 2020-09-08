import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

      {/* header */}
      <Header />

      <Router>
        <Switch>
          <Route path="/chat">
            <h1>Iam chat page</h1>
          </Route>

          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>

    {/* tinder cards */}
          {/* buttons below tinder cards*/}
          {/* chat screen */}
          {/* individual chat screen*/}


    </div>
  );
}

export default App;
