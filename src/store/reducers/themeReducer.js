import {lightTheme} from '../../constants/colors';
import {FONT_SIZE_STEP} from '../../constants/metrics';
import {MODIFY_FONT_SIZE, SWITCH_THEME} from '../actionTypes';

const initialState = {
  delta: 0,
  theme: lightTheme,
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case MODIFY_FONT_SIZE:
      if (
        (action.delta < 0 && state.delta > 0) ||
        (action.delta > 0 && state.delta < 10)
      ) {
        return {
          ...state,
          delta: state.delta + action.delta,
        };
      }
      return {...state};
    default:
      return state;
  }
};
