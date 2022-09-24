import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NavMenu from './components/NavMenu';
// import Animload from './assets/animation/Animload';
import SwapiState from './context/SwapiState';

function App() {
  return (
    <SwapiState>
      <Router>
        <NavMenu />
        <Switch>
          <Route path='/' component={Home} exact={true} />
         
        </Switch>
      </Router>
    </SwapiState>
  );
}

export default App;
