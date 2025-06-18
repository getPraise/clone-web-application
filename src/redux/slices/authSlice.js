import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = "";
    },
  },
});

export const { setInput, setError, clearError } = authSlice.actions;
export default authSlice.reducer;
