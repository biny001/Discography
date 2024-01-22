// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import musicReducer from "./features/musicDataSlice";
import musicSaga from "./musicSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    music: musicReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(musicSaga);

export default store;
