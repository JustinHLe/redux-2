import { GET_USER, SET_USER } from "./userTypes"

const initalState = {
    usersSaga: []
}


const userReducerSaga = (state = initalState, action) => {
    switch(action.type){
        case SET_USER:
            const { payload } = action;
            return{
                ...state,
                usersSaga: payload
            }

        default: return state
    }
}

export default userReducerSaga