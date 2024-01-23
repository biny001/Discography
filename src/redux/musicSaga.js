import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { removeSong, updateSong } from "./features/userPlaylist";

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

function* editSong(action) {
  try {
    console.log("Edition song:", action.payload);
    const response = yield call(
      fetch,
      `${SONGS_API_URL}/${action.payload.id}`,
      {
        method: "PUT",
        body: JSON.stringify(action.payload),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    yield put(updateSong(action.payload));
  } catch (err) {
    console.log(err);
  }
}

function* createSong(action) {
  try {
    const response = yield call(fetch, SONGS_API_URL / `${action.payload.id}`, {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);
    const data = response.JSON();
  } catch (err) {
    console.log(err);
  }
}

export function* musicSaga() {
  yield takeLatest("playlist/removeSong", deleteSong);
  yield takeLatest("playlist/updateSong", editSong);
  yield takeLatest("playlist/createSong", createSong);
}
