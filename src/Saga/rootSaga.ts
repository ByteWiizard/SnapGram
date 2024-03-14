import { all } from "redux-saga/effects";
import userDetailsSaga from './userDetailSaga';

export default function* rootSaga() {
    yield all([
        userDetailsSaga()
    ]);
}