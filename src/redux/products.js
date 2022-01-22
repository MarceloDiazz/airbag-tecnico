import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";



export const getProducts = createAsyncThunk("getProducts", () => {
    return axios
      .get(`/api/products`)
      .then((res) => res.data);
  });


export const getSingleProduct = createAsyncThunk("getSingleProduct", (id) => {
    return axios
      .get(`/api/products/${id}`)
      .then((res) => res.data);
  });


  const reducerProducts = createReducer({}, {
    [getProducts.fulfilled]: (state, action) => {
      state.allProducts = action.payload;
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.singleProduct = action.payload;
    },
  });


  export default reducerProducts