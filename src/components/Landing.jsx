import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/products');
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Paradise Nursery</h1>
        <p style={styles.description}>
          Welcome to Paradise Nursery — your online houseplant shop where
          every leaf tells a story. Explore a lush collection of aromatic and medicinal plants,
          handpicked to bring nature's tranquility right into your home.
        </p>
        <button style={styles.button} onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1350&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(45, 106, 79, 0.75)',
    padding: '2rem 3rem',
    borderRadius: 8,
    maxWidth: 600,
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    lineHeight: 1.5,
  },
  button: {
    backgroundColor: '#95d5b2',
    border: 'none',
    padding: '0.75rem 2rem',
    fontSize: '1.2rem',
    color: '#2d6a4f',
    fontWeight: 'bold',
    borderRadius: 6,
    cursor: 'pointer',
  },
};
