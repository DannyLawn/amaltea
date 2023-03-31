import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderedProducts: [],
  sendingRequest: false,
  sendingAnApplication: null,
  boardMessage: ''
};

const orderDataSlice = createSlice({
  name: 'orderData',
  initialState,
  reducers: {
    
    addProducts(state, action) {
      state.orderedProducts = action.payload
    },
    clearOrderData() {
        return {
            ...initialState
        }
    },
    sendRequest(state, action){
      state.sendingRequest = true
    },
    successfulSending(){
      return {
        ...initialState,
        sendingAnApplication: true,
        sendingRequest: false
      }
    },
    failedSending(){
      return {
        ...initialState,
        sendingAnApplication: false,
        sendingRequest: false
      }
    },
    updateMessage(state, action) {
      state.boardMessage = action.payload
    },
    clearError(state, action){
      state.sendingAnApplication = null
    }
  },
})

export default orderDataSlice.reducer;

export const { addProducts, clearOrderData, successfulSending, failedSending, updateMessage, sendRequest, clearError } = orderDataSlice.actions;