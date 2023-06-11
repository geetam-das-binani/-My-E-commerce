import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/features/cart/cartSlice";
import modalReducer from '../src/features/modal/modalSlice'

export const store = configureStore({
	reducer: {
		cart: cartReducer,
		modal: modalReducer,
	},
});
