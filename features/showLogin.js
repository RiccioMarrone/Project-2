import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const showLogin = createSlice({
  name: "showLogin",
  initialState,
  reducers: {
    changeState: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { changeState } = showLogin.actions;
export default showLogin.reducer;
