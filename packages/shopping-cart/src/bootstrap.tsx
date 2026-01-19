import React from 'react';
import ReactDOM from 'react-dom/client';
import Cart from './components/Cart';
import CartButton from './components/CartButton';
import { CartDrawer } from './components/CartDrawer';
import { useCartStore } from './stores/cartStore';
import './index.css';

// Mock data for testing
const mockProducts = [
  {
    id: '1',
    name: 'Laptop Dell XPS 15',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400',
    stock: 15,
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1592286927505-8b4c4b2e4f6c?w=400',
    stock: 25,
  },
];

const TestApp = () => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <h1>Shopping Cart Test</h1>
        <CartButton />
      </div>

      {/* Test buttons */}
      <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
        {mockProducts.map((product) => (
          <button
            key={product.id}
            onClick={() => addItem(product)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Add {product.name}
          </button>
        ))}
      </div>

      <Cart />
      <CartDrawer />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <TestApp />
    </React.StrictMode>
  );
}