import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../utils";

const initialState = {
  isAuthenticated: false,
  token: "",
  loading: false,
  error: null,
};

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Register Gagal");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth`, {
        email,
        password,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login Gagal");
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.delete(
        `${API_URL}/auth`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error);
    }
  }
);

const authSlice = createSlice({
  initialState,
  name: "auth",
  extraReducers: (builder) => {
    builder
      /* =========================================== Register =========================================== */
      .addCase(register.pending, (state) => {
        builder;
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.data;
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.payload;
      })
      /* =========================================== Login =========================================== */
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.data.token;
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.error = action.payload;
      })
      /* =========================================== Logout =========================================== */
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.loading = false;
        state.token = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
