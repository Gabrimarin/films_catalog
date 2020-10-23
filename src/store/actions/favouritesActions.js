import {ADD_MOVIE, DELETE_MOVIE} from '../actionTypes';

export const addMovie = (id) => {
  return {
    type: ADD_MOVIE,
    id,
  };
};

export const deleteMovie = (id) => {
  return {
    type: DELETE_MOVIE,
    id,
  };
};
