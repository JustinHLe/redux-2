import { call, put } from 'redux-saga/effects'
import { requestGetUser } from '../request/user'
import { setUserSaga } from '../../redux';


export function* handleGetUser(action){
    try{
        const response = yield call(requestGetUser);
        yield put(setUserSaga(response.data))
    } catch(e){
        console.log(e)
    }
}