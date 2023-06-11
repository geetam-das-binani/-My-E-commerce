import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import { removeItem } from "../features/cart/cartSlice";
import { increment } from "../features/cart/cartSlice";
import { decrement } from "../features/cart/cartSlice";

export default function CartItems({ id, title, price, img, amount }) {
	const dispatch = useDispatch();
	return (
		<article className="cart-item">
			<img src={img} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className="item-price">${price}</h4>
				{/* remove button */}
				<button
					id={id}
					onClick={() => dispatch(removeItem(id))}
					className="remove-btn"
				>
					remove
				</button>
			</div>
			<div>
				{/* increase amount */}
				<button onClick={() => dispatch(increment(id))} className="amount-btn">
					<ChevronUp />
				</button>
				{/* amount */}
				<p className="amount">{amount}</p>
				{/* decrease amount */}
				<button
					onClick={() => {
						if (amount === 1) {
							dispatch(removeItem(id));
							return;
						}

						dispatch(decrement(id));
					}}
					className="amount-btn"
				>
					<ChevronDown />
				</button>
			</div>
		</article>
	);
}
