import { API_URL } from "../../api/constant";
import { ActionTypes } from "../constants/user-action-types";
import axios from "axios";

export const updateUser = (user) => async (dispatch) => {
  const response = await axios.put(`${API_URL}/${user.id}`, user);
  const updatedUser = await response.data;
  dispatch({
    type: ActionTypes.UPDATE_USER,
    payload: updatedUser,
  });
};

export const fetchUsers = () => async (dispatch) => {
  const response = await axios.get(`${API_URL}`, {
    params: {
      skip: 0,
      take: 10,
      orderByField: "first_name",
      orderByValue: "asc",
    },
  });
  const data = await response.data;
  dispatch({ type: ActionTypes.FETCH_USER, payload: data });
};

export const addUser = (user) => {
  return {
    type: ActionTypes.ADD_USER,
    payload: user,
  };
};

export const removeUser = () => {
  return {
    type: ActionTypes.REMOVE_USER,
  };
};
