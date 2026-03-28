import { CartItem as CartItemType } from '../types/cart';
import { useCartStore } from '../stores/cartStore';
import { useThemeStore } from '@ecommerce/shared';

interface CartItemProps {
  item: CartItemType;
}

export const CartItemComponent = ({ item }: CartItemProps) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= item.stock) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const itemTotal = item.price * item.quantity;
  const isMaxQuantity = item.quantity >= item.stock;
  const isMinQuantity = item.quantity <= 1;

  return (
    <div className="flex gap-4 px-6 py-5">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg border-gray-200 dark:border-gray-700"
      />

      <div className="flex-1">
        <h4
          className={`text-sm font-medium mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          {item.name}
        </h4>
        <p className="text-xs text-gray-500 mb-3">${item.price.toFixed(2)}</p>

        <div className="flex items-center gap-3">
          <div className="flex items-center border rounded-md overflow-hidden">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              disabled={isMinQuantity}
              className="w-8 h-8 text-sm hover:bg-gray-100 disabled:opacity-40"
            >
              −
            </button>

            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                handleQuantityChange(parseInt(e.target.value) || 1)
              }
              min="1"
              max={item.stock}
              className="w-10 text-center text-sm bg-transparent"
            />

            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              disabled={isMaxQuantity}
              className="w-8 h-8 text-sm hover:bg-gray-100 disabled:opacity-40"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="text-xs text-gray-500 hover:text-red-600"
          >
            Remove
          </button>
        </div>
      </div>

      <div
        className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}
      >
        ${itemTotal.toFixed(2)}
      </div>
    </div>
  );
};
