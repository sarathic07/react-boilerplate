import { call, put, takeLatest } from "redux-saga/effects";
import Api from "../services/Api";
import {
  LOGIN_USER_REQUESTED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  GET_MY_INFO_SUCCESS,
  GET_MY_INFO_FAIL,
  GET_MY_INFO_REQUESTED
} from "../actions/user";

function* login(action) {
  try {
    const response = yield call(
      Api.login,
      action.payload.email,
      action.payload.password
    );
    yield put({
      type: LOGIN_USER_SUCCESS,
      payload: { token: { ...response.data } }
    });
    yield put({ type: GET_MY_INFO_REQUESTED });
  } catch (e) {
    yield put({ type: LOGIN_USER_FAIL });
  }
}

function* getMyInfo() {
  try {
    const response = yield call(Api.getMyInfo);
    yield put({
      type: GET_MY_INFO_SUCCESS,
      payload: { user: response.data.user }
    });
  } catch (e) {
    yield put({ type: GET_MY_INFO_FAIL });
  }
}

function* saga() {
  yield takeLatest(LOGIN_USER_REQUESTED, login);
  yield takeLatest(GET_MY_INFO_REQUESTED, getMyInfo);
}

export default saga;
