// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userPlaylist from "./features/userPlaylist";
import { musicSaga } from "./musicSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    music: userPlaylist,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(musicSaga);

export default store;
