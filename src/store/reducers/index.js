import {themeReducer} from './themeReducer';
import {combineReducers} from 'redux';
import {favouritesReducer} from './favouritesReducer';
export const Reducers = combineReducers({
  themeState: themeReducer,
  favouritesState: favouritesReducer,
});
