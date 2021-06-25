import React from 'react';
import './styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
    </>
  );
}
