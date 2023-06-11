import React from "react";
import { closeModal } from "../features/modal/modalSlice";
import { Clearcart } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

export default function Modal() {
	const dispatch = useDispatch();

	return (
		<aside className="modal-container">
			<div className="modal">
				<h4>Remove all items from your shopping cart?</h4>
				<div className="btn-container">
					<button
						type="button"
						className="btn confirm-btn"
						onClick={() => {
							dispatch(Clearcart());
							dispatch(closeModal(false));
						}}
					>
						confirm
					</button>
					<button
						onClick={() => dispatch(closeModal(false))}
						type="button"
						className="btn clear-btn"
					>
						cancel
					</button>
				</div>
			</div>
		</aside>
	);
}
