import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Films from './components/Films';
import People from './components/People';
import NavMenu from './components/NavMenu';
// import Animload from './assets/animation/Animload';
// import Swapi from './api/Swapi';





function App() {

  const [films, setFilms] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() =>{
      async function fetchFilms() {
          let res = await fetch('https://swapi.dev/api/films/?format=json');
          let data = await res.json();  
          setFilms(data.results); 
           }

      async function fetchPeople() {
          let res = await fetch('https://swapi.dev/api/people/?format=json');
          let data = await res.json();  
          setPeople(data.results); 
           }
      

           fetchFilms();
           fetchPeople();
  },[]);
  console.log('films', films);
  console.log('people', people);



  
  return (
    <>
      <Router>
    <NavMenu />
   

    <Switch>
      <Route exact path="/">
        <Home />
        </Route>

        <Route exact path="/films">
        <Films data={films} />
        </Route>

        <Route exact path="/people">
        <People data={people} />
        </Route>
        </Switch>
   
       
      </Router>
    </>
  );
}

export default App;
