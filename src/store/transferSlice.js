import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../utils";
import axios from "axios";

const initialState = {
  historyData: null,
  loading: false,
  error: null,
};

export const getHistory = createAsyncThunk(
  "transfer/getHistory",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.get(`${API_URL}/transaction/history`, {
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

const transferSlice = createSlice({
  initialState,
  name: "transfer",
  extraReducers: (builder) => {
    builder
      /* =========================================== Get History =========================================== */
      .addCase(getHistory.pending, (state) => {
        builder;
        state.loading = true;
        state.error = null;
      })
      .addCase(getHistory.fulfilled, (state, action) => {
        state.historyData = action.payload.data;
        state.loading = false;
      })
      .addCase(getHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default transferSlice.reducer;
