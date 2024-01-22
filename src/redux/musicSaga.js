import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { removeSong } from "./features/userPlaylist";

const API_BASE_URL = "https://my-json-server.typicode.com/biny001/fakejson";
const SONGS_API_URL = `${API_BASE_URL}/songs`;

function* deleteSong(action) {
  try {
    console.log("Deleting song:", action.payload);
    const response = yield call(fetch, `${SONGS_API_URL}/${action.payload}`, {
      method: "DELETE",
    });

    // Log the response from the DELETE request
    console.log("Delete response:", response);

    yield put(removeSong(action.payload));
  } catch (err) {
    console.error("Error deleting song:", err);
  }
}

export function* musicSaga() {
  yield takeLatest("playlist/removeSong", deleteSong);
}
