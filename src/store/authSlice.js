import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../utils";

const initialState = {
  isAuthenticated: false,
  token: "",
  isPinExists: false,
  verifyPin: false,
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
      return rejectWithValue(
        error.response?.data?.message ||
          "Login gagal (Username / Password Salah)"
      );
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

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (changePasswordData, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.patch(
        `${API_URL}/auth/change-password`,
        changePasswordData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Update gagal");
    }
  }
);

export const createPin = createAsyncThunk(
  "auth/createPin",
  async (createPin, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.patch(
        `${API_URL}/auth/update-pin`,
        createPin,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Buat PIN gagal");
    }
  }
);

export const verifyPin = createAsyncThunk(
  "auth/verifyPin",
  async (verifyPin, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.post(
        `${API_URL}/auth/confirm-pin`,
        verifyPin,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Buat PIN gagal");
    }
  }
);

export const changePin = createAsyncThunk(
  "auth/changePin",
  async (changePinData, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.patch(
        `${API_URL}/auth/change-pin`,
        changePinData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Update gagal");
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
        state.isPinExists = action.payload.data.is_pin_exist;
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
      })
      /* =========================================== Change Password =========================================== */
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /* =========================================== Create Pin =========================================== */
      .addCase(createPin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPin.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createPin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /* =========================================== Verify Pin =========================================== */
      .addCase(verifyPin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyPin.fulfilled, (state) => {
        state.verifyPin = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(verifyPin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /* =========================================== Verify Pin =========================================== */
      .addCase(changePin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePin.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(changePin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
