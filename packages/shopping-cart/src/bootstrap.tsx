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
    image:
      'https://images.unsplash.com/photo-1739617148480-f7bb4eb33c2d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    stock: 25,
  },
];

const TestApp = () => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-medium tracking-tight">
            Shopping Cart Playground
          </h1>
          <CartButton />
        </div>

        {/* Mock products */}
        <div className="mb-12">
          <h2 className="text-lg font-medium mb-4">Test products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mockProducts.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between gap-4 p-4 rounded-xl border bg-white"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-cover border"
                  />
                  <div>
                    <div className="text-sm font-medium">{product.name}</div>
                    <div className="text-xs text-gray-500">
                      ${product.price.toFixed(2)}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => addItem(product)}
                  className="
                    px-4 py-2 rounded-lg text-sm font-medium
                    bg-gray-900 text-white
                    hover:bg-gray-800 transition
                  "
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Full cart page */}
        <Cart />
      </div>

      {/* Drawer overlay */}
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
