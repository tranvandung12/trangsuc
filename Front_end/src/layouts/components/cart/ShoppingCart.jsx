/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div>
                {cartItems.map((item, index) => (
                    <div key={index}>
                        <p>{item.name} - {item.price}</p>
                        <button onClick={() => removeFromCart(index)}>Remove</button>
                    </div>
                ))}
            </div>
            <div>
                <h2>Products</h2>
                <button onClick={() => addToCart({ name: 'Product 1', price: '$10' })}>Add Product 1</button>
                <button onClick={() => addToCart({ name: 'Product 2', price: '$20' })}>Add Product 2</button>
                <button onClick={() => addToCart({ name: 'Product 3', price: '$30' })}>Add Product 3</button>
            </div>
        </div>
    );
}
