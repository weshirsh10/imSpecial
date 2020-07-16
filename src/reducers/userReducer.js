import {SET_USER} from '../actions/types';

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: 'NEW NAME',
      };
    default:
      return state;
  }
};

export default userReducer;