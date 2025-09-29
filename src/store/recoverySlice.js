import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../utils";

const initialState = {
  loading: false,
  error: null,
  success: null,
};

export const forgotPassword = createAsyncThunk(
  "recovery/forgotPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/forgot-password`, {
        email,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.err ||
          error.response?.data?.msg ||
          "Email tidak terdaftar pada aplikasi ini"
      );
    }
  }
);

export const resetPassword = createAsyncThunk(
  "recovery/resetPassword",
  async ({ token, newPassword }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/reset-password`, {
        token,
        new_password: newPassword,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.err ||
          error.response?.data?.msg ||
          "Gagal reset password"
      );
    }
  }
);

export const forgotPIN = createAsyncThunk(
  "recovery/forgotPIN",
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/forgot-pin`, {
        email,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.err ||
          error.response?.data?.msg ||
          "Email tidak terdaftar pada aplikasi ini"
      );
    }
  }
);

export const resetPIN = createAsyncThunk(
  "recovery/resetPIN",
  async ({ token, newPIN }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/reset-pin`, {
        token,
        new_pin: newPIN,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.err || "Gagal reset PIN");
    }
  }
);

const recoverySlice = createSlice({
  name: "recovery",
  initialState,
  reducers: {
    clearRecoveryState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.msg;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.msg;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(forgotPIN.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(forgotPIN.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.msg;
      })
      .addCase(forgotPIN.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(resetPIN.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(resetPIN.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.msg;
      })
      .addCase(resetPIN.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearRecoveryState } = recoverySlice.actions;
export default recoverySlice.reducer;
