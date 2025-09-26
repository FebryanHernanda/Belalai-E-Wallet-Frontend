import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../utils";

const initialState = {
  userData: null,
  loading: false,
  error: null,
};

export const getProfile = createAsyncThunk(
  "user/getProfile",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.get(`${API_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Gagal mengambil data"
      );
    }
  }
);

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (formData, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.patch(`${API_URL}/profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Update gagal");
    }
  }
);

export const deleteAVAProfile = createAsyncThunk(
  "user/deleteAvatar",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.delete(`${API_URL}/profile/avatar`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Delete gagal");
    }
  }
);

const userSlice = createSlice({
  initialState,
  name: "user",
  extraReducers: (builder) => {
    builder
      /* =========================================== Get Profile =========================================== */
      .addCase(getProfile.pending, (state) => {
        builder;
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.userData = action.payload.data;
        state.loading = false;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /* =========================================== Update Profile ========================================== */
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /* =========================================== Delete AVA Profile ========================================== */
      .addCase(deleteAVAProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAVAProfile.fulfilled, (state) => {
        state.loading = false;
        state.userData.profile_picture = null;
      })
      .addCase(deleteAVAProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
