import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import {
  removeSong,
  updateSong,
  createSong,
  getSong,
  fetchSong,
} from "./features/userPlaylist";

const API_BASE_URL = "https://my-json-server.typicode.com/biny001/fakejson";
const SONGS_API_URL = `${API_BASE_URL}/songs`;

export function* getData(action) {
  try {
    const response = yield call(fetch, `${SONGS_API_URL}`);

    if (response.ok) {
      const data = yield response.json();
      // console.log(data);
      yield put(getSong(data));
    } else {
      console.error("Failed to fetch songs:", response.statusText);
    }
  } catch (err) {
    console.error("An error occurred while fetching songs:", err);
  }
}

function* deleteSong(action) {
  try {
    console.log("Deleting song:", action.payload);
    const response = yield call(fetch, `${SONGS_API_URL}/${action.payload}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const statusCode = response.status;
      alert("delete successful ");
    }
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
    if (response.ok) {
      const statusCode = response.status;
      alert("edit successful with status: ", statusCode);
    }
  } catch (err) {
    console.log(err);
  }
}

function* postSong(action) {
  try {
    const response = yield call(fetch, `${SONGS_API_URL}`, {
      method: "POST",
      body: JSON.stringify(action.payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const statusCode = response.status;
      alert("post  successful  ");
    }
  } catch (err) {
    console.log(err);
  }
}

export function* musicSaga() {
  yield takeLatest("playlist/removeSong", deleteSong);
  yield takeLatest("playlist/updateSong", editSong);
  yield takeLatest("playlist/createSong", postSong);
  yield takeLatest("playlist/fetchSong", getData);
}
