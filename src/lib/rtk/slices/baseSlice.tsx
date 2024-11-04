import { createSlice } from "@reduxjs/toolkit";

export type BaseSlice = {
  count: number;
};

const initialState: BaseSlice = {
  count: 0,
};

export const baseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});

export const { increment } = baseSlice.actions;

export default baseSlice.reducer;
