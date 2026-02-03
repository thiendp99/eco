import { useCartStore } from '../stores/cartStore';
import { useThemeStore } from '@ecommerce/shared';
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

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeCart();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, closeCart]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const tax = totalPrice * 0.1;
  const total = totalPrice + tax;

  return (
    <>
      <div onClick={closeCart} className="fixed inset-0 bg-black/40 z-[999]" />

      <div
        className={`
          fixed top-0 right-0 bottom-0 w-full max-w-sm z-[1000]
          flex flex-col border-l
          ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}
        `}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-200 dark:border-gray-800">
          <div>
            <h2
              className={`text-base font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              Cart
            </h2>
            <p className="text-xs text-gray-500">{totalItems} items</p>
          </div>
          <button
            onClick={closeCart}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center px-6">
              <div className="text-5xl mb-4">🛒</div>
              <p className="text-sm text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {items.map((item) => (
                <CartItemComponent key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-gray-200 dark:border-gray-800">
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className={isDark ? 'text-white' : 'text-gray-900'}>
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tax</span>
                <span className={isDark ? 'text-white' : 'text-gray-900'}>
                  ${tax.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="flex justify-between font-medium mb-6">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => {
                closeCart();
                alert('Checkout');
              }}
              className={`
                w-full py-3 text-sm font-medium transition
                ${
                  isDark
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }
              `}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};
