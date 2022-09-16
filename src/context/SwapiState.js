import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import SwapiContext from './swapiContext';
import swapiReducer from './swapiReducer';
import { GET_FILMS, GET_PEOPLE, FILM_ERROR } from '../types';

// Create a custom hook to use the contact context
export const useContacts = () => {
    const { state, dispatch } = useContext(SwapiContext);
    return [state, dispatch];
  };

  // Get Films
export const getFilms = async (dispatch) => {
    try {
      const res = await axios.get('https://swapi.dev/api/films/?format=json');
  
      dispatch({
        type: GET_FILMS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: FILM_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Get People
export const getPeople = async (dispatch) => {
    try {
      const res = await axios.get('https://swapi.dev/api/people/?format=json');
  
      dispatch({
        type: GET_PEOPLE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: FILM_ERROR,
        payload: err.response.msg
      });
    }
  };
  
  const ContactState = (props) => {
    const initialState = {
      films: null,
      people: null,
      error: null
    };
  
    const [state, dispatch] = useReducer(swapiReducer, initialState);
  
    return (
      <SwapiContext.Provider value={{ state: state, dispatch }}>
        {props.children}
      </SwapiContext.Provider>
    );
  };
  
  export default ContactState;