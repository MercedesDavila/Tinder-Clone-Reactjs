import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons.js';
import Chats from './Chats.js';
import ChatScreen from './ChatScreen.js';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>

        <Route path="/chat/:person">
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>

          <Route path="/chat">
            <Header backButton='/' />
            <Chats />
          </Route>

          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
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
