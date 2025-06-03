import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cartSlice';

const plantsData = {
  aromatic: [
    {
      id: 'a1',
      name: 'Lavender',
      price: 12.99,
      description: 'Soothing aromatic plant with purple flowers.',
      thumbnail:
        'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 'a2',
      name: 'Rosemary',
      price: 8.99,
      description: 'Herb with a woody fragrance, perfect for cooking.',
      thumbnail:
        'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=200&q=80',
    },
  ],
  medicinal: [
    {
      id: 'm1',
      name: 'Aloe Vera',
      price: 15.0,
      description: 'Medicinal succulent used for skin soothing.',
      thumbnail:
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 'm2',
      name: 'Chamomile',
      price: 10.0,
      description: 'Calming herb often used in teas.',
      thumbnail:
        'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=200&q=80',
    },
  ],
  decorative: [
    {
      id: 'd1',
      name: 'Monstera',
      price: 22.0,
      description: 'Tropical decorative plant with unique leaves.',
      thumbnail:
        'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 'd2',
      name: 'Snake Plant',
      price: 18.5,
      description: 'Low maintenance decorative plant.',
      thumbnail:
        'https://images.unsplash.com/photo-1589652717521-9a5a9a9ed6c3?auto=format&fit=crop&w=200&q=80',
    },
  ],
};

export default function Products() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedItems, setAddedItems] = useState({});

  const handleAddToCart = plant => {
    dispatch(addItem(plant));
    setAddedItems(prev => ({ ...prev, [plant.id]: true }));
  };

  return (
    <div style={styles.container}>
      <h2>Our Plants</h2>

      {Object.entries(plantsData).map(([category, plants]) => (
        <section key={category} style={styles.categorySection}>
          <h3 style={styles.categoryTitle}>
            {category.charAt(0).toUpperCase() + category.slice(1)} Plants
          </h3>
          <div style={styles.plantsGrid}>
            {plants.map(plant => (
              <div key={plant.id} style={styles.card}>
                <img
                  src={plant.thumbnail}
                  alt={plant.name}
                  style={styles.image}
                />
                <h4>{plant.name}</h4>
                <p>{plant.description}</p>
                <p style={styles.price}>${plant.price.toFixed(2)}</p>
                <button
                  disabled={addedItems[plant.id] || cartItems[plant.id]}
                  onClick={() => handleAddToCart(plant)}
                  style={{
                    ...styles.button,
                    ...(addedItems[plant.id] || cartItems[plant.id]
                      ? styles.disabledButton
                      : {}),
                  }}
                >
                  {addedItems[plant.id] || cartItems[plant.id]
                    ? 'Added'
                    : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 1000,
    margin: '2rem auto',
    padding: '0 1rem',
    fontFamily: 'Arial, sans-serif',
  },
  categorySection: {
    marginBottom: '2.5rem',
  },
  categoryTitle: {
    fontSize: '1.75rem',
    marginBottom: '1rem',
    color: '#2d6a4f',
  },
  plantsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
    gap: '1.5rem',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: 6,
    padding: '1rem',
    boxShadow: '1px 1px 5px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 140,
    objectFit: 'cover',
    borderRadius: 6,
    marginBottom: '0.75rem',
  },
  price: {
    fontWeight: 'bold',
    marginTop: '0.5rem',
  },
  button: {
    marginTop: '0.75rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#2d6a4f',
    color: 'white',
    border: 'none',
    borderRadius: 4,
    cursor: 'pointer',
  },
  disabledButton: {
    backgroundColor: '#aaa',
    cursor: 'default',
  },
};
