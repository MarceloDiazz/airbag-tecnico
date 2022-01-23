import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("getProducts", () => {
  return axios.get(`/api/products`).then((res) => res.data);
});

export const getSingleProduct = createAsyncThunk("getSingleProduct", (id) => {
  return axios.get(`/api/products/${id}`).then((res) => res.data);
});

export const postProduct = createAsyncThunk("postProduct", (product) => {
  return axios
    .post(`/api/admin/product`, product)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log({ err });
    });
});

export const updateProduct = createAsyncThunk(
  "upProduct",
  ({ id, product }) => {
    return axios
      .put(`/api/admin/products/update/${id}`, product)
      .then((res) => res.data);
  }
);

export const deleteProduct = createAsyncThunk("delProduct", (id) => {
  return axios.delete(`/api/admin/delete/${id}`);
});

export const searchMake = createAsyncThunk("Search_Make", (name) => {
  return axios.get(`/api/products/make/${name}`).then((res) => res.data);
});
const reducerProducts = createReducer(
  {},
  {
    [getProducts.fulfilled]: (state, action) => {
      state.allProducts = action.payload;
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.singleProduct = action.payload;
    },
    [postProduct.fulfilled]: (state, action) => (state = {}),
    [updateProduct.fulfilled]: (state, action) => {
      state.update = action.payload;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state = {};
    },
    [searchMake.fulfilled]: (state, action) => {
      state.make = action.payload;
    },
  }
);

export default reducerProducts;
