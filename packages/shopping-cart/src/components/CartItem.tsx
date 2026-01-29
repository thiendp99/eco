import { CartItem as CartItemType } from '../types/cart';
import { useCartStore } from '../stores/cartStore';
import { useThemeStore } from '../stores/themeStore';

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
    <div className="flex gap-4 p-5 transition-all duration-300">
      {/* Product Image */}
      <div className="relative flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className={`
            w-24 h-24 object-cover rounded-xl border-2
            transition-all duration-300
            ${isDark ? 'border-gray-700' : 'border-gray-200'}
          `}
        />
        {item.quantity >= item.stock && (
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 text-[10px] font-extrabold uppercase tracking-wider whitespace-nowrap shadow-lg">
            Max Stock
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex-1 flex flex-col gap-3">
        <div>
          <h4 className={`
            text-base font-bold tracking-tight leading-snug mb-2
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}>
            {item.name}
          </h4>
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              ${item.price.toFixed(2)} each
            </span>
            <span className={`
              px-2 py-0.5 rounded-lg text-xs font-semibold
              ${isDark 
                ? 'bg-gray-700 text-gray-400' 
                : 'bg-gray-100 text-gray-600'
              }
            `}>
              Stock: {item.stock}
            </span>
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className={`
            flex items-center gap-2 px-2 py-2 rounded-xl border
            ${isDark 
              ? 'bg-gray-700 border-gray-600' 
              : 'bg-gray-50 border-gray-200'
            }
          `}>
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              disabled={isMinQuantity}
              className={`
                w-8 h-8 flex items-center justify-center rounded-lg
                text-lg font-bold transition-all duration-200
                ${isMinQuantity
                  ? isDark
                    ? 'bg-gray-800 text-gray-600 cursor-not-allowed opacity-50'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:scale-110'
                }
              `}
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
              className={`
                w-12 px-2 py-1 text-center border-none bg-transparent
                text-base font-bold
                ${isDark ? 'text-white' : 'text-gray-900'}
              `}
            />

            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              disabled={isMaxQuantity}
              className={`
                w-8 h-8 flex items-center justify-center rounded-lg
                text-lg font-bold transition-all duration-200
                ${isMaxQuantity
                  ? isDark
                    ? 'bg-gray-800 text-gray-600 cursor-not-allowed opacity-50'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                  : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:scale-110'
                }
              `}
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => removeItem(item.id)}
            className="px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 hover:scale-105"
          >
            🗑️ Remove
          </button>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col items-end justify-between min-w-[80px]">
        <div className={`
          text-xl font-extrabold tracking-tight
          ${isDark ? 'text-white' : 'text-gray-900'}
        `}>
          ${itemTotal.toFixed(2)}
        </div>

        <div className={`text-xs font-semibold ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
          ${item.price.toFixed(2)} × {item.quantity}
        </div>
      </div>
    </div>
  );
};