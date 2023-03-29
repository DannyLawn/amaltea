import { configureStore } from "@reduxjs/toolkit";
import divisionsNavigationSlice from '../services/slices/divisions-navigation-slice';
import productsConstructorSlice from '../services/slices/products-constructor-slice';
import orderDataSlice from "./slices/order-data-slice";

const store = configureStore({
  reducer: {
    divisionsNavigation: divisionsNavigationSlice,
    productsConstructor: productsConstructorSlice,
    orderData: orderDataSlice
  },
})

export default store;