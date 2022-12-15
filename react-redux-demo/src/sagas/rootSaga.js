import { takeLatest } from 'redux-saga/effects'
import { GET_USER } from '../redux/userSagas/userTypes'
import { handleGetUser } from './handlers/user'

export function* watcherSaga(){
    yield takeLatest(GET_USER, handleGetUser)
}

/*
    When GET_USER action is dispatched, watcherSaga will take the action and call handleGetUser
*/