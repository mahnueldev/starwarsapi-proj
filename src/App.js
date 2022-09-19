import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Films from './pages/Films'
import NavMenu from './components/NavMenu'
// import Animload from './assets/animation/Animload';





function App() {
  
  return (
    <Router>
      <NavMenu/>
 <Switch>
        <Route path='/' component={Home} exact={true}/>
        <Route path='/films' component={Films} />
      </Switch>
    </Router>
  );
}

export default App;
