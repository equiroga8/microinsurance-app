import React from 'react';
import './css/App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Insurer from './components/Insurer';
import Insuree from './components/Insuree';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Insuree}/>
          <Route path="/InsureeView" exact component={Insuree}/>
          <Route path="/InsurerView" exact component={Insurer}/>
        </Switch>  
      </div>
    </Router>  
  );
}

export default App;
