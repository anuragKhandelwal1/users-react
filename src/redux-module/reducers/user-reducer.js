import { ActionTypes } from "../constants/user-action-types";

const initialState = {
  users: [],
};

export const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.UPDATE_USER:
      if (payload) {
        console.log(state)
        state.users.forEach((user) => {
          if (user.id === payload.id) {
            user = Object.assign({},payload);
          }
        });
      }
      return {
        ...state,
        users: payload,
      };

    case ActionTypes.FETCH_USER:
      return {
        ...state,
        users: payload,
      };

    // create -> users : [...state.users, payload]
    default: {
      return state;
    }
  }
};
