import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import SwapiContext from './swapiContext';
import swapiReducer from './swapiReducer';
import { GET_FILMS, GET_PEOPLE} from './types';

// Create a custom hook to use the contact context
export const useSwapi= () => {
    const { state, dispatch } = useContext(SwapiContext);
    return [state, dispatch];
  };

  // Get Films
export const getFilms = async (dispatch) => {
   try{
      const res = await axios.get('https://swapi.dev/api/films/');
  
      dispatch({
        type: GET_FILMS,
        payload: res.data.results
      });
    } catch (err) {
      console.log(err)
    };
    };
  
  // Get People
export const getPeople = async (dispatch) => {
   
      const res = await axios.get('https://swapi.dev/api/people/?format=json');
  
      dispatch({
        type: GET_PEOPLE,
        payload: res.data
      });
   
  };
  
  const   SwapiState = (props) => {
    const initialState = {
      films: [],
      people: null,
      
    };
  
    const [state, dispatch] = useReducer(swapiReducer, initialState);
  
    return (
      <SwapiContext.Provider value={{ state: state, dispatch }}>
        {props.children}
      </SwapiContext.Provider>
    );
  };
  
  export default SwapiState;