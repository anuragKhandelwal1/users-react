import { API_URL } from "../../api/constant";
import { ActionTypes } from "../constants/user-action-types";
import axios from "axios";

export const updateUser = (user) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${user.id}`, user);
    const updatedUser = await response.data;
    alert("User Updated Successfully");
    dispatch({
      type: ActionTypes.UPDATE_USER,
      payload: updatedUser,
    });
  } catch (error) {
    alert(error);
  }
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

export const addUser = (user) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/create`, user);
    const addedUser = await response.data;
    alert("User Added Successfully");
    dispatch({
      type: ActionTypes.ADD_USER,
      payload: addedUser,
    });
  } catch (error) {
    alert(error);
  }
};

export const removeUser = () => {
  return {
    type: ActionTypes.REMOVE_USER,
  };
};
