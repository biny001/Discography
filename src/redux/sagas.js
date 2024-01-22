// import { call, put, takeEvery } from "redux-saga/effects";
// import {
//   fetchMusicDataStart,
//   fetchMusicDataSuccess,
//   fetchMusicDataFailure,
// } from "./features/musicDataSlice.js";

// const url =
//   "https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "ef25efabc2msh1f03fb2d437e002p1d43e3jsnf86ca3249813",
//     "X-RapidAPI-Host": "shazam.p.rapidapi.com",
//   },
// };

// const fetchData = async () => {
//   const res = await fetch(url, options);
//   const data = await res.json();
//   return data?.tracks;
// };

// function* fetchMusicData() {
//   console.log("its working");
//   try {
//     yield put(fetchMusicDataStart());
//     const musicData = yield call(fetchData);

//     yield put(fetchMusicDataSuccess(musicData));
//     // yield put({ type: "MUSIC_FETCH_SUCCESS", musicData });
//   } catch (error) {
//     yield put(fetchMusicDataFailure(error.message));
//   }
// }

// function* mySaga() {
//   yield takeEvery("fetchMusicDataStart", fetchMusicData);
// }

// export default mySaga;
