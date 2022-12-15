import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from '@redux-saga/core'
import rootReducer from './rootReducer'
import { watcherSaga } from '../sagas/rootSaga'


const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk, sagaMiddleWare))
)

sagaMiddleWare.run(watcherSaga) //dispatch listener

export default store
