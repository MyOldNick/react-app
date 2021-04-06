//types
import { SET_USERS } from "../actionsTypes/usersTypes";

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return { ...state, users: payload };

    default:
      return state;
  }
};

export default usersReducer;
