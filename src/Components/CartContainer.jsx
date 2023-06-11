import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "../Components/CartItems";
import { openModal } from "../features/modal/modalSlice";

export default function CartContainer() {
	const dispatch = useDispatch();
	const { cartItems, total, amount } = useSelector((store) => store.cart);



	if (amount < 1) {
		return (
			<section className="cart">
				{/* cart header */}
				<header>
					<h2>your bag</h2>
					<h4 className="empty-cart">is currently empty</h4>
				</header>
			</section>
		);
	}

	return (
		<section className="cart">
			{/* cart header */}
			<header>
				<h2>your bag</h2>
			</header>
			{/* cart items */}
			<div>
				{cartItems.map((item) => {
					return <CartItems key={item.id} {...item} />;
				})}
			</div>
			{/* cart footer */}
			<footer>
				<hr />
				<div className="cart-total">
					<h4>
						total <span>${total}</span>
					</h4>
				</div>
				<button
					onClick={() => dispatch(openModal(true))}
					className="btn clear-btn"
				>
					clear cart
				</button>
			</footer>
		</section>
	);
}
