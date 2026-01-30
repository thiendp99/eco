import { useCartStore } from '../stores/cartStore';
import { useThemeStore } from '@ecommerce/shared';
import { CartItemComponent } from './CartItem';

const Cart = () => {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const totalItems = useCartStore((state) => state.totalItems);
  const clearCart = useCartStore((state) => state.clearCart);
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  const handleCheckout = () => {
    alert(`Checkout ${totalItems} items for $${totalPrice.toFixed(2)}`);
  };

  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] p-8">
        <div
          className={`
          max-w-lg p-12 rounded-2xl border text-center
          ${
            isDark
              ? 'bg-gray-800 border-gray-700 shadow-2xl'
              : 'bg-white border-gray-200 shadow-xl'
          }
        `}
        >
          <div className="text-7xl mb-6 animate-bounce">🛒</div>
          <h2
            className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Your cart is empty
          </h2>
          <p
            className={`text-lg leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Add some amazing products to get started!
          </p>
        </div>
      </div>
    );
  }

  const subtotal = totalPrice;
  const tax = totalPrice * 0.1;
  const total = totalPrice * 1.1;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div
        className={`
        flex justify-between items-center mb-8 p-8 rounded-2xl text-white
        ${
          isDark
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl'
            : 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl'
        }
      `}
      >
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            🛍️ Shopping Cart
          </h1>
          <p className="text-lg opacity-90">
            {totalItems} {totalItems === 1 ? 'item' : 'items'}
          </p>
        </div>
        <button
          onClick={clearCart}
          className="px-6 py-3 rounded-xl bg-red-500/90 hover:bg-red-600 text-white font-semibold text-sm uppercase tracking-wide transition-all duration-300 backdrop-blur-lg hover:-translate-y-1 hover:shadow-lg"
        >
          🗑️ Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Cart Items */}
        <div>
          <h3
            className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Items in Your Cart
          </h3>
          <div
            className={`
            rounded-2xl border overflow-hidden
            ${
              isDark
                ? 'bg-gray-800 border-gray-700 shadow-2xl'
                : 'bg-white border-gray-200 shadow-lg'
            }
          `}
          >
            {items.map((item, index) => (
              <div key={item.id}>
                <CartItemComponent item={item} />
                {index < items.length - 1 && (
                  <hr
                    className={isDark ? 'border-gray-700' : 'border-gray-100'}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div
          className={`
          p-8 rounded-2xl border sticky top-8
          ${
            isDark
              ? 'bg-gray-800 border-gray-700 shadow-2xl'
              : 'bg-gray-50 border-gray-200 shadow-lg'
          }
        `}
        >
          <h3
            className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            📋 Order Summary
          </h3>

          <div
            className={`flex justify-between mb-4 text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            <span>Subtotal ({totalItems} items):</span>
            <span
              className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <div
            className={`flex justify-between mb-4 text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            <span>Shipping:</span>
            <span className="font-bold text-green-600 px-2 py-0.5 rounded-lg bg-green-100">
              FREE
            </span>
          </div>

          <div
            className={`flex justify-between mb-6 text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            <span>Tax (10%):</span>
            <span
              className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              ${tax.toFixed(2)}
            </span>
          </div>

          <hr
            className={`my-6 border-2 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
          />

          <div className="flex justify-between text-2xl font-extrabold mb-8 p-4 rounded-xl text-white bg-gradient-to-r from-indigo-500 to-purple-600">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full py-5 rounded-xl text-lg font-bold uppercase tracking-widest text-white bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            💳 Proceed to Checkout
          </button>

          <p
            className={`mt-4 text-xs text-center ${isDark ? 'text-gray-500' : 'text-gray-600'}`}
          >
            🔒 Secure checkout powered by Stripe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
