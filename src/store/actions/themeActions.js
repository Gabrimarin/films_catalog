import {SWITCH_THEME, MODIFY_FONT_SIZE} from '../actionTypes';

export const switchTheme = (theme) => {
  return (dispatch) => {
    dispatch({
      type: SWITCH_THEME,
      theme,
    });
  };
};

export const modifyFontSize = (delta) => {
  console.log(delta)
  return (dispatch) => {
    dispatch({
      type: MODIFY_FONT_SIZE,
      delta,
    });
  };
};
