import {ADD_MOVIE, DELETE_MOVIE} from '../actionTypes';

const initialState = {
  idList: [],
};

export const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        idList: state.idList.concat(action.id),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        idList: state.idList.filter((item) => item !== action.id),
      };
    default:
      return state;
  }
};
