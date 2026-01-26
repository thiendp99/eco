import { useCartStore } from '../stores/cartStore';
import { CartItemComponent } from './CartItem';

const Cart = () => {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const totalItems = useCartStore((state) => state.totalItems);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleCheckout = () => {
    alert(`Checkout ${totalItems} items for $${totalPrice.toFixed(2)}`);
    // In real app: navigate to checkout page
    // navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div style={{ padding: '3rem', textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛒</div>
        <h2>Your cart is empty</h2>
        <p style={{ color: '#666', marginTop: '0.5rem' }}>
          Add some products to get started!
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <h1>Shopping Cart ({totalItems} items)</h1>
        <button
          onClick={clearCart}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Clear Cart
        </button>
      </div>

      {/* Cart Items */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px solid #e0e0e0',
          marginBottom: '1.5rem',
        }}
      >
        {items.map((item) => (
          <CartItemComponent key={item.id} item={item} />
        ))}
      </div>

      {/* Cart Summary */}
      <div
        style={{
          backgroundColor: '#f9f9f9',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '1px solid #e0e0e0',
        }}
      >
        <h3 style={{ marginBottom: '1rem' }}>Order Summary</h3>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
          }}
        >
          <span>Subtotal ({totalItems} items):</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
          }}
        >
          <span>Shipping:</span>
          <span style={{ color: '#28a745' }}>FREE</span>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
          }}
        >
          <span>Tax (10%):</span>
          <span>${(totalPrice * 0.1).toFixed(2)}</span>
        </div>

        <hr
          style={{
            margin: '1rem 0',
            border: 'none',
            borderTop: '1px solid #ccc',
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '1.25rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
          }}
        >
          <span>Total:</span>
          <span style={{ color: '#007bff' }}>
            ${(totalPrice * 1.1).toFixed(2)}
          </span>
        </div>

        <button
          onClick={handleCheckout}
          style={{
            width: '100%',
            padding: '1rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1.125rem',
            fontWeight: 'bold',
          }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
