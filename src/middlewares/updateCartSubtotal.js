export const updateCartSubTotal = user => {
	const cartSubTotal = user.cart.reduce((acc, curr) => acc + curr.count * curr.device.price, 0);
	user.setCartSubTotal(cartSubTotal);
};
