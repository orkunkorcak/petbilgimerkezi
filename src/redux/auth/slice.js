import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logoutUser, refreshUser } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.isRefreshing = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: { name: null, surname: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    isRefreshing: false,
    error: null,
  },
  reducers: {
    // opsiyonel logout action
    localLogout(state) {
      state.user = { name: null, surname: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.user = {
          name: user.name || null,
          surname: user.surname || null,
          email: user.email || null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, handleRejected)

      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user, token } = action.payload;
        state.user = {
          name: user.name || null,
          surname: user.surname || null,
          email: user.email || null,
        };
        state.token = token || null;
        state.isLoggedIn = !!token;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, handleRejected)

      .addCase(logoutUser.pending, handlePending)
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = { name: null, surname: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logoutUser.rejected, handleRejected)

      // REFRESH
.addCase(refreshUser.pending, (state) => {
  state.isRefreshing = true;
  state.error = null;
})
.addCase(refreshUser.fulfilled, (state, action) => {
  const { user, token } = action.payload;
  state.user = {
    name: user?.name || null,
    surname: user?.surname || null,
    email: user?.email || null,
  };
  state.token = token || null;
  state.isLoggedIn = !!token;
  state.isRefreshing = false;
  state.error = null;
})
.addCase(refreshUser.rejected, (state, action) => {
  state.user = { name: null, surname: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.error = action.payload;
});
  },
});

export const { localLogout } = authSlice.actions;
export default authSlice.reducer;
