import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cartItems from "../../cartItems";
const url = "https://course-api.com/react-useReducer-cart-project";
const initialState = {
	cartItems: cartItems,
	total: 0,
	amount: 4,
	isLoading: true,
};
export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
	try {
		const result = await axios.get(url);
		console.log(result);
		return result.data;
	} catch (error) {
		return error.name;
	}
});

const Cartslice = createSlice({
	name: "Cart",
	initialState: initialState,
	reducers: {
		Clearcart: (state) => {
			state.cartItems = [];
		},
		removeItem: (state, action) => {
			const itemId = action.payload;
			console.log(action);

			state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
			// or the below method
			// const newcart = [...state.cartItems];
			// const index = state.cartItems.findIndex((x) => x.id === itemId);
			// newcart.splice(index, 1);

			// state.cartItems = newcart;
		},
		increment: (state, action) => {
			const itemId = action.payload;
			const cartAmount = state.cartItems.find((item) => item.id === itemId);
			cartAmount.amount += 1;
		},
		decrement: (state, { payload }) => {
			// destructured the action object
			const cartAmount = state.cartItems.find((item) => item.id === payload);
			cartAmount.amount -= 1;
		},
		calculateTotals: (state) => {
			// const amount = state.cartItems.reduce(
			// 	(total, item) => total + item.amount,
			// 	0
			// );
			// const total = state.cartItems
			// 	.map((item) => item.price * item.amount)
			// 	.reduce((total, item) => total + item, 0);
			// state.amount = amount;
			// state.total = total.toFixed(2);
			// or below method
			let amount = 0;
			let total = 0;
			state.cartItems.forEach((item) => {
				amount += item.amount;
				total += item.price * item.amount;
			});
			state.amount = amount;
			state.total = total.toFixed(2);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getCartItems.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getCartItems.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			console.log(payload);
			state.cartItems =payload
		});
		builder.addCase(getCartItems.rejected, (state, action) => {
			state.isLoading = false;
			console.log(action.payload);
		});
	},
});

export const { Clearcart, removeItem, increment, decrement, calculateTotals } =
	Cartslice.actions;
export default Cartslice.reducer;
