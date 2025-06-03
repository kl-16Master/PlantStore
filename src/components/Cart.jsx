import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  clearCart,
} from '../features/cartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const itemsArray = Object.values(cartItems);

  // Calculate total quantity & total cost
  const totalQuantity = itemsArray.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = itemsArray.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  if (totalQuantity === 0) {
    return (
      <div style={styles.container}>
        <h2>Your cart is empty</h2>
        <Link to="/products" style={styles.button}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Your Cart</h2>
      <div style={styles.cartList}>
        {itemsArray.map(item => (
          <div key={item.id} style={styles.card}>
            <img src={item.thumbnail} alt={item.name} style={styles.image} />
            <div style={styles.details}>
              <h3>{item.name}</h3>
              <p>Unit Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>

              <div style={styles.buttons}>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                <button onClick={() => dispatch(deleteItem(item.id))}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.summary}>
        <p>Total Items: {totalQuantity}</p>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
      </div>

      <div style={styles.actions}>
        <button
          onClick={() => alert('Checkout Coming Soon!')}
          style={styles.button}
        >
          Checkout
        </button>
        <Link to="/products" style={styles.button}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 900,
    margin: '2rem auto',
    padding: '0 1rem',
    fontFamily: 'Arial, sans-serif',
  },
  cartList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  card: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: 6,
  },
  image: {
    width: 120,
    height: 120,
    objectFit: 'cover',
    borderRadius: 6,
  },
  details: {
    flex: 1,
  },
  buttons: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '0.5rem',
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#2d6a4f',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  },
  summary: {
    marginTop: '1.5rem',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  actions: {
    marginTop: '1rem',
    display: 'flex',
    gap: '1rem',
  },
};
