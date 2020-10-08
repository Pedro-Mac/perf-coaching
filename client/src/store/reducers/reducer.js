import * as actionTypes from './../actions/actionTypes';

import { updateObject } from './utility';

const initialState = {
  user: null
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return updateObject(state, { user: action.user });
    case actionTypes.LOGOUT:
      return updateObject(state, { user: action.user });
    default:
      return state;
  }
};

export default reducer;
