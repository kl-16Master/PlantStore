import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const cartItems = useSelector(state => state.cart.items);
  
  // Calculate total quantity in cart
  const totalQuantity = Object.values(cartItems).reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Paradise Nursery</h1>

      <div style={styles.links}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
          end
        >
          Landing
        </NavLink>

        <NavLink
          to="/products"
          style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Products
        </NavLink>

        <NavLink
          to="/cart"
          style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Cart ({totalQuantity})
        </NavLink>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#2d6a4f',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  logo: {
    margin: 0,
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
  },
  activeLink: {
    color: '#95d5b2',
    fontWeight: '700',
    textDecoration: 'underline',
  },
};
