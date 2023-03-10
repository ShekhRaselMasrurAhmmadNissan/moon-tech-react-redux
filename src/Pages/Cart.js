import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';

const Cart = () => {
	const productCart = useSelector((state) => state.cart);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
			{productCart
				.sort((a, b) => a._id - b._id)
				.map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
		</div>
	);
};

export default Cart;
