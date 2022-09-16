import {
    GET_FILMS,
    GET_PEOPLE,
    FILM_ERROR,
   
  } from '../types';
  
  const swapiReducer = (state, action) => {
    switch (action.type) {
      case GET_FILMS:
        return {
          ...state,
          films: action.payload
        };