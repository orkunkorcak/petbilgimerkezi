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
  extraReducers: (builder) => {
    builder
      // REGISTER
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        const { user } = action.payload;
        state.user = {
          name: userData.name || null,
          surname: userData.surname || null,
          email: userData.email || null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, handleRejected)

      // LOGIN
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user, accessToken } = action.payload;
        state.user = {
          name: user.name,
          surname: user.surname,
          email: user.email,
        };
        state.token = accessToken;
        state.isLoggedIn = !!accessToken;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, handleRejected)

      // LOGOUT
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
        state.isRefreshing = false;
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload || "Token yenileme başarısız.";
      });
 
  },
});
export default authSlice.reducer;