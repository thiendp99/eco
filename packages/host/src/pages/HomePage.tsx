import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

export const HomePage = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Welcome to E-Commerce Platform</h1>
      <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
        A modern micro frontend application built with React, Vite, and Module Federation
      </p>

      {!isAuthenticated ? (
        <div>
          <p>Please login to start shopping</p>
          <Link
            to="/login"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              marginTop: '1rem',
            }}
          >
            Go to Login
          </Link>
        </div>
      ) : (
        <div>
          <p>Start exploring our products!</p>
          <Link
            to="/products"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              marginTop: '1rem',
            }}
          >
            Browse Products
          </Link>
        </div>
      )}

      <div style={{ marginTop: '3rem', textAlign: 'left' }}>
        <h2>Features</h2>
        <ul style={{ lineHeight: '2' }}>
          <li>Micro Frontend Architecture with Module Federation</li>
          <li>Vite for blazing fast development</li>
          <li>React Query for server state management</li>
          <li>Zustand for client state management</li>
          <li>Vitest for testing</li>
          <li>Dark/Light theme support</li>
        </ul>
      </div>
    </div>
  );
};