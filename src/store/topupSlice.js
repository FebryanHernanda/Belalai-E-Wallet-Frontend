import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../utils";

const initialState = {
  paymentMethod: null,
  loading: false,
  error: null,
};

export const getPaymentMethod = createAsyncThunk(
  "topup/getPaymentMethod",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.get(`${API_URL}/topup/methods`, {
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

export const topUpAmount = createAsyncThunk(
  "topup/amount",
  async (formData, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.post(`${API_URL}/topup`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Gagal Top Up");
    }
  }
);

const topupSlice = createSlice({
  initialState,
  name: "topup",
  extraReducers: (builder) => {
    builder
      /* =========================================== Get Profile =========================================== */
      .addCase(getPaymentMethod.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPaymentMethod.fulfilled, (state, action) => {
        state.paymentMethod = action.payload.data;
        state.loading = false;
      })
      .addCase(getPaymentMethod.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /* =========================================== Get Profile =========================================== */
      .addCase(topUpAmount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(topUpAmount.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(topUpAmount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default topupSlice.reducer;
