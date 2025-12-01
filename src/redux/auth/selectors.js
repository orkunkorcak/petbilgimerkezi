export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectPasswordReset = (state) => state.auth.passwordReset;
export const selectIsPasswordResetSending = (state) =>
  state.auth.passwordReset?.isSending;
export const selectIsPasswordResetSuccess = (state) =>
  state.auth.passwordReset?.success;
export const selectPasswordResetMessage = (state) =>
  state.auth.passwordReset?.message;
