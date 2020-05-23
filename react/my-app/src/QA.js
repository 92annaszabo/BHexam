import React from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SetUser from './components/setUser';
import Questions from './components/Questions';
import Header from './components/Header'


export default function Qa() {
  return (
    <div>
      <Router>
      <Header/>   
        <Switch>
          <Route path='/questions'>
            <Questions/>
          </Route>
          <Route exact path='/'>
            <SetUser/>
          </Route>
        </Switch>
      </Router> 

    </div>
  );
}


