"use client"
import { configureStore } from "@reduxjs/toolkit";
import { userApi } from './user';
import sha256HashReducer from './sha256HashSlice'

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    sha256Hash: sha256HashReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(userApi.middleware),
});

// // Define a type for the entire Redux store state
// export type RootState = ReturnType<typeof store.getState>;

// // Define a type for the dispatch function
// export type AppDispatch = typeof store.dispatch;
