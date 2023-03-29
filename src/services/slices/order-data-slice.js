import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderedProducts: [],
  userData: null
};

const orderDataSlice = createSlice({
  name: 'orderData',
  initialState,
  reducers: {
    
    addProducts(state, action) {
      state.orderedProducts = action.payload
    },
    addUserData(state, action) {
        state.userData = action.payload
    },
    clearOrderData() {
        return {
            ...initialState
        }
    }
  },
})

export default orderDataSlice.reducer;

export const { addProducts, addUserData, clearOrderData } = orderDataSlice.actions;