import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../utils";
import axios from "axios";

const initialState = {
  contactData: null,
  historyData: null,
  loading: false,
  error: null,
};

export const getContactTransfer = createAsyncThunk(
  "transfer/getContact",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.get(`${API_URL}/transfer`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Gagal mengambil data");
    }
  }
);

export const getHistory = createAsyncThunk(
  "transfer/getHistory",
  async (_, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.get(`${API_URL}/transaction/history/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Gagal mengambil data");
    }
  }
);

export const deleteHistory = createAsyncThunk(
  "transfer/delete/history",
  async (transactionID, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.delete(
        `${API_URL}/transaction/${transactionID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Gagal menghapus data");
    }
  }
);

export const deleteTopupHistory = createAsyncThunk(
  "transfer/delete/topup",
  async (transactionID, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.delete(
        `${API_URL}/transaction/topup/${transactionID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Gagal menghapus data");
    }
  }
);

export const transferData = createAsyncThunk(
  "transfer/transferData",
  async (formData, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      const response = await axios.post(`${API_URL}/transfer`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Terjadi Kesalahan");
    }
  }
);

const transferSlice = createSlice({
  initialState,
  name: "transfer",
  extraReducers: (builder) => {
    builder
      /* =========================================== Get History Data =========================================== */
      .addCase(getHistory.pending, (state) => {
        builder;
        state.loading = true;
        state.error = null;
      })
      .addCase(getHistory.fulfilled, (state, action) => {
        state.historyData = action.payload.data;
        state.loading = false;
        state.error = null;
      })
      .addCase(getHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /* =========================================== Get Contact Data =========================================== */
      .addCase(getContactTransfer.pending, (state) => {
        builder;
        state.loading = true;
        state.error = null;
      })
      .addCase(getContactTransfer.fulfilled, (state, action) => {
        state.contactData = action.payload.data;
        state.loading = false;
        state.error = null;
      })
      .addCase(getContactTransfer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /* =========================================== Transfer Data  =========================================== */
      .addCase(transferData.pending, (state) => {
        builder;
        state.loading = true;
        state.error = null;
      })
      .addCase(transferData.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(transferData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /* =========================================== Delete Transfer Data  =========================================== */
      .addCase(deleteHistory.pending, (state) => {
        builder;
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteHistory.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      /* =========================================== Delete TopUp Data  =========================================== */
      .addCase(deleteTopupHistory.pending, (state) => {
        builder;
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTopupHistory.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteTopupHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default transferSlice.reducer;
