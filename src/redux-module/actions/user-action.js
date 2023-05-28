import { API_URL } from "../../api/constant";
import { ActionTypes } from "../constants/user-action-types";
import axios from "axios";

// const dispatch = useDispatch();

export const updateUser = (user) => {
  return {
    type: ActionTypes.UPDATE_USER,
    payload: user,
  };
};

export const fetchUsers = () => async (dispatch) => {
  //api
  const response = await axios.get(`${API_URL}`,{params:{
    skip:0,
    take:10,
    orderByField:'first_name',
    orderByValue:'asc'}
  });
  const data = await response.data;
  dispatch({ type: ActionTypes.FETCH_USER, payload: data });

  //   .then((response) => {
  //     //   dispatch(response.data.data);
  //     return {
  //         type: ActionTypes.FETCH_USER,
  //         payload: response.data.data,
  //       };
  //     })
  //     .catch((error) => console.log(error));

  //   return {
  //     type: ActionTypes.FETCH_USER,
  //     payload: users,
  //   };
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
