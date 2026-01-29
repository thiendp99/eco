import { useCartStore } from '../stores/cartStore';
import { useThemeStore } from '../stores/themeStore';

const CartButton = () => {
  const totalItems = useCartStore((state) => state.totalItems);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleCart}
      className={`
        relative px-6 py-3 rounded-xl font-bold text-base uppercase tracking-wide
        flex items-center gap-3 text-white
        transition-all duration-300
        shadow-lg hover:shadow-xl hover:-translate-y-1
        ${isDark
          ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
          : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
        }
      `}
    >
      <span className="text-xl">🛒</span>
      <span>Cart</span>
      {totalItems > 0 && (
        <span className={`
          absolute -top-2 -right-2 min-w-[28px] h-7
          flex items-center justify-center
          px-2 rounded-full
          text-xs font-extrabold text-white
          bg-gradient-to-r from-red-600 to-red-700
          shadow-lg animate-bounce
          ${isDark ? 'border-2 border-gray-900' : 'border-2 border-white'}
        `}>
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </button>
  );
};

export default CartButton;