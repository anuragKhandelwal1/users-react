import { ActionTypes } from "../constants/user-action-types";

const initialState ={
    users: [],
}

export const UserReducer = (state = initialState, { type, payload  }) =>{
    switch(type){
        case ActionTypes.UPDATE_USER:
            return{
                ...state,
                users: payload
            }

        case ActionTypes.FETCH_USER:
            return{
                ...state,
                users: payload
            }

            // create -> users : [...state.users, payload]
        default: {
            return state
        }
    }
}