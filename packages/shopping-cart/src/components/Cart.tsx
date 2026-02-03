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
      <div className="flex items-center justify-center min-h-[60vh] px-4">
        <div
          className={`
            max-w-md w-full p-10 rounded-2xl text-center border
            ${isDark ? 'bg-gray-900 border-gray-800 text-gray-300' : 'bg-white border-gray-200 text-gray-600'}
          `}
        >
          <div className="text-5xl mb-6">🛒</div>
          <h2
            className={`text-2xl font-medium mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Your cart is empty
          </h2>
          <p className="text-sm leading-relaxed">
            Looks like you haven’t added anything yet.
          </p>
        </div>
      </div>
    );
  }

  const subtotal = totalPrice;
  const tax = totalPrice * 0.1;
  const total = totalPrice * 1.1;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-10">
        <h1
          className={`text-2xl font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          Shopping Cart
        </h1>
        <button
          onClick={clearCart}
          className="text-sm text-red-500 hover:underline"
        >
          Clear cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div
            className={`
              rounded-xl border overflow-hidden
              ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}
            `}
          >
            {items.map((item, index) => (
              <div key={item.id}>
                <CartItemComponent item={item} />
                {index < items.length - 1 && (
                  <hr
                    className={isDark ? 'border-gray-800' : 'border-gray-100'}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`
            p-6 rounded-xl border h-fit
            ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}
          `}
        >
          <h3
            className={`text-lg font-medium mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Order summary
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Subtotal
              </span>
              <span className={isDark ? 'text-white' : 'text-gray-900'}>
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Tax
              </span>
              <span className={isDark ? 'text-white' : 'text-gray-900'}>
                ${tax.toFixed(2)}
              </span>
            </div>

            <hr className={isDark ? 'border-gray-800' : 'border-gray-200'} />

            <div className="flex justify-between text-base font-medium">
              <span className={isDark ? 'text-white' : 'text-gray-900'}>
                Total
              </span>
              <span className={isDark ? 'text-white' : 'text-gray-900'}>
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className={`
              mt-8 w-full py-3 text-sm font-medium transition
              ${
                isDark
                  ? 'bg-white text-gray-900 hover:bg-gray-100'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }
            `}
          >
            Checkout
          </button>

          <p
            className={`mt-3 text-xs text-center ${isDark ? 'text-gray-500' : 'text-gray-500'}`}
          >
            Secure checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
