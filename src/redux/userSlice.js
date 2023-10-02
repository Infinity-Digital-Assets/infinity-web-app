import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Login AsyncThunk for login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userLoginCredentials) => {
    try {
      const request = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/login`,
        userLoginCredentials
      );
      const response = await request.data.data;
      //   localStorage.setItem("user", JSON.stringify(response));
      return response;
    } catch (error) {
      // console.log(error.response.data.error)
      throw error.response.data.error;
    }
  }
);

//Register AsyncThunk for register
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (userRegisterCredentials) => {
    try {
      const request = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/register`,
        userRegisterCredentials
      );
      const response = await request.data.message;
      return response;
    } catch (error) {
      throw error.response.data.error;
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    error: null,
    mess: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null; // Reset user data or relevant parts of the state
    },
    register: (state, action) => {
      state.user = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder 
      //Add Cases for Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.mess = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.error.message;
      });
  },
});

export const { logout, login, register } = userSlice.actions;
export default userSlice.reducer;
