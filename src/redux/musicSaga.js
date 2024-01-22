// src/sagas/musicSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from "./features/musicDataSlice";

const url =
  "https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ef25efabc2msh1f03fb2d437e002p1d43e3jsnf86ca3249813",
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
  },
};

function* fetchData() {
  try {
    const response = yield call(fetch, url, options);
    const data = yield response.json();
    yield put(fetchDataSuccess(data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

function* musicSaga() {
  yield takeLatest(fetchDataStart.type, fetchData);
}

export default musicSaga;
