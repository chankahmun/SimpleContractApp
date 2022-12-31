import createSagaMiddleware from '@redux-saga/core';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import Reducer from './rdxReducers';
import rootSaga from './rdxSaga';
 
const sagaMiddleware = createSagaMiddleware();
const middleware = [];
middleware.push(sagaMiddleware);

const rootReducer = combineReducers({data: Reducer});
const store = createStore(rootReducer,applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

module.exports = {store}
