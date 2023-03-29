import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: []
};

const productsConstructorSlice = createSlice({
  name: 'productsConstructor',
  initialState,
  reducers: {
    
    addAllProducts(state, action) {
      return {
        ...initialState,
        allProducts: action.payload
      }
    },

    clearAllProducts() {
      return {
        ...initialState
      }
    },

    addProduct(state, action) {
      state.allProducts.find(product => product.id === action.payload.id).count += 1;
    },

    removeProduct(state, action) {
      if (state.allProducts.find(product => product.id === action.payload.id).count === 0) {
        return state
      } else {
        state.allProducts.find(product => product.id === action.payload.id).count -= 1
      }
    },

    updateOptionProduct(state, action) {
      state.allProducts.find(product => product.id === action.payload.product.id).option = action.payload.option;
    },

    updatePriceProduct(state, action) {
      state.allProducts.find(product => product.id === action.payload.product.id).price = action.payload.price;
    }
  },
})

export default productsConstructorSlice.reducer;

export const { addAllProducts, clearAllProducts, addProduct, removeProduct, updateOptionProduct, updatePriceProduct } = productsConstructorSlice.actions;