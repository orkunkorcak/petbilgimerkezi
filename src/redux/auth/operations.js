import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

export const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const getAuthConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const clearAuthHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

// REGISTER
export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ name, surname, email, password }, thunkAPI) => {
    try {
      const response = await axios.post("/auth/register", {
        name,
        surname,
        email,
        password,
      });
      console.log("Register response:", response.data);
      return response.data.data;
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// LOGIN
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(
        "/auth/login",
        { email, password },
        { withCredentials: true } // backend cookie setliyorsa gerekli
      );
      const token = response.data.accessToken;

      if (!token) {
        return thunkAPI.rejectWithValue("Token not found in response");
      }

      setAuthHeader(token);
      console.log("Login response:", response.data);
      return response.data;
      
    } catch (error) {
      console.error("Login error:", error);
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// LOGOUT
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/auth/logout", {}, { withCredentials: true });
      clearAuthHeader();
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// REFRESH (hybrid - öncelikle Authorization header ile POST dener, yoksa cookie ile GET'e düşer)
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const currentToken = state?.auth?.token; // mevcut access veya refresh token (backend beklentisine göre)

      let response;

      if (currentToken) {
        // Eğer backend header ile bekliyorsa: POST /auth/refresh Authorization: Bearer <token>
        response = await axios.post(
          "/auth/refresh",
          {},
          getAuthConfig(currentToken)
        );
      } else {
        // Eğer backend refresh token'ı httpOnly cookie'ye koyuyorsa: cookie gönderilsin
        response = await axios.get("/auth/refresh", { withCredentials: true });
      }

      const { accessToken, user } = response.data;

      if (!accessToken) {
        throw new Error("Access token not found in response");
      }

      // Yeni access token'ı global header'a set et
      setAuthHeader(accessToken);

      return { accessToken, user };
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);
