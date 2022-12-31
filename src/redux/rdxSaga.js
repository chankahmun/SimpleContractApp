import {SETUP} from './rdxType';
import { put, all} from 'redux-saga/effects';
import network from '../helpers/networkHelper';
import { URL } from '../assets/index'; 
function* initSaga(){
    let response = yield network.get(URL.CONSTRACTS_JSON)
    yield put({type:SETUP, payload:response})    
}

export default function* rootSaga(){
    yield all([
        initSaga()
    ])
}