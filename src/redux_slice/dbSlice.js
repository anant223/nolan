import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const dbSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getData } = dbSlice.actions;
export default dbSlice.reducer;
