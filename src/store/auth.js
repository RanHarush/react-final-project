import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  registered: false,
  isLogged: false,
  userData: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    registered(state) {
      state.registered = true;
    },

    login(state, action) {
      state.isLogged = true;
      state.userData = action.payload;
    },

    loading(state) {
      state.loading = true;
    },

    logout: (state) => initialAuthState,
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
