import { GET_FILMS} from './types';

const swapiReducer = (state, action) => {
  switch (action.type) {
    case GET_FILMS:
      return {
        ...state,
        films: action.payload,
      };
    default:
      return state;
  }
};

export default swapiReducer;
