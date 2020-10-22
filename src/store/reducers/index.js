import {themeReducer} from './themeReducer';
import {combineReducers} from 'redux';
export const Reducers = combineReducers({
  themeState: themeReducer,
});
