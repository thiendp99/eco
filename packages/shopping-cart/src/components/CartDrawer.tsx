import { useCartStore } from '../stores/cartStore';
import { useThemeStore } from '../stores/themeStore';
import { CartItemComponent } from './CartItem';
import { useEffect } from 'react';

export const CartDrawer = () => {
  const isOpen = useCartStore((state) => state.isOpen);
  const closeCart = useCartStore((state) => state.closeCart);
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const totalItems = useCartStore((state) => state.totalItems);
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeCart();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, closeCart]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const tax = totalPrice * 0.1;
  const total = totalPrice + tax;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] animate-fadeIn"
      />

      {/* Drawer */}
      <div className={`
        fixed top-0 right-0 bottom-0 w-full max-w-md
        flex flex-col z-[1000]
        shadow-2xl animate-slideInRight
        ${isDark ? 'bg-gray-900' : 'bg-white'}
      `}>
        {/* Header */}
        <div className={`
          p-6 flex justify-between items-center
          ${isDark 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-indigo-500 to-purple-600'
          }
          text-white shadow-lg
        `}>
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">
              🛒 Your Cart
            </h2>
            <p className="text-sm opacity-90 mt-1">
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </p>
          </div>
          <button
            onClick={closeCart}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-lg hover:bg-white/30 text-white font-bold text-xl transition-all duration-300 hover:rotate-90"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className={`
          flex-1 overflow-y-auto
          ${isDark ? 'bg-gray-900' : 'bg-gray-50'}
        `}>
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center">
              <div className="text-6xl mb-4 animate-bounce">🛒</div>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Your cart is empty
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Start shopping to add items!
              </p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className={`
                    rounded-xl overflow-hidden border
                    ${isDark 
                      ? 'bg-gray-800 border-gray-700' 
                      : 'bg-white border-gray-200'
                    }
                    shadow-md
                  `}
                >
                  <CartItemComponent item={item} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className={`
            p-6 border-t-2 shadow-2xl
            ${isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200'
            }
          `}>
            {/* Subtotal */}
            <div className={`flex justify-between mb-3 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>Subtotal:</span>
              <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            {/* Tax */}
            <div className={`flex justify-between mb-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <span>Tax (10%):</span>
              <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ${tax.toFixed(2)}
              </span>
            </div>

            <hr className={`my-4 border-2 ${isDark ? 'border-gray-700' : 'border-gray-200'}`} />

            {/* Total */}
            <div className="flex justify-between text-xl font-extrabold mb-6 p-4 rounded-xl text-white bg-gradient-to-r from-indigo-500 to-purple-600">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => {
                closeCart();
                alert('Checkout');
              }}
              className="w-full py-4 rounded-xl text-lg font-bold uppercase tracking-widest text-white bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              💳 Checkout
            </button>

            <p className={`mt-4 text-xs text-center ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              🔒 Secure checkout
            </p>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </>
  );
};