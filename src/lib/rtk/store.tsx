import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  TypedUseSelectorHook,
  useSelector as untypedUseSelector,
} from "react-redux";
import { baseSlice } from "./slices/baseSlice";

export const store = configureStore({
  reducer: {
    baseSlice: baseSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

setupListeners(store.dispatch);

export type ReduxState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useRtk: TypedUseSelectorHook<ReduxState> = untypedUseSelector;
