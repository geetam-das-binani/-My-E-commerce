import React from "react";
import Navbar from "./Components/Navbar";
import CartContainer from "./Components/CartContainer";
import { useEffect } from "react";
import { calculateTotals } from "../src/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Components/Modal";
import { getCartItems } from "../src/features/cart/cartSlice";

function App() {
	const dispatch = useDispatch();
	const { cartItems, isLoading } = useSelector((store) => store.cart);
	const { isOpen } = useSelector((store) => store.modal);

	useEffect(() => {
		dispatch(calculateTotals());
	}, [cartItems]);
	useEffect(() => {
		dispatch(getCartItems());
	}, []);

	if (isLoading) {
		return (
			<div className="loading">
				<h1>Loading...</h1>
			</div>
		);
	}

	return (
		<main>
			{isOpen && <Modal />}

			<Navbar />
			<CartContainer />
		</main>
	);
}

export default App;
