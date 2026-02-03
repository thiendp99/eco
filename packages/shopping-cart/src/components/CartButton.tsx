import { useCartStore } from '../stores/cartStore';
import { useThemeStore } from '@ecommerce/shared';

const CartButton = () => {
  const totalItems = useCartStore((state) => state.totalItems);
  const toggleCart = useCartStore((state) => state.toggleCart);
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleCart}
      className={`
        relative h-10 px-4 rounded-full text-sm font-medium
        flex items-center gap-2 transition
        ${
          isDark
            ? 'bg-gray-800 text-white hover:bg-gray-700'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }
      `}
    >
      <span>🛒</span>
      <span>Cart</span>

      {totalItems > 0 && (
        <span
          className="
            absolute -top-1 -right-1 min-w-[18px] h-[18px]
            rounded-full bg-red-500 text-white
            text-[11px] leading-[18px] text-center
          "
        >
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </button>
  );
};

export default CartButton;
