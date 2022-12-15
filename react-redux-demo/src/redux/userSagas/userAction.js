import { GET_USER, SET_USER } from "./userTypes";

//actions
export const getUserSaga = () => {
    return {
        type: GET_USER
    }
}

export const setUserSaga = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
}