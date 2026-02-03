import { Product } from '@ecommerce/shared';
import { useCartStore } from 'shoppingCart/CartStore';
import { useThemeStore } from '@ecommerce/shared';

interface ProductCardProps {
  product: Product;
  onViewDetails: (id: string) => void;
}

export const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product);
    openCart();
  };

  const isStockAvailable = product.stock > 0;

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  return (
    <div
      onClick={() => onViewDetails(product.id)}
      className={`
        group relative cursor-pointer
        flex flex-col h-full
        rounded-xl overflow-hidden
        transition-all duration-300 ease-out
        ${
          isDark
            ? 'bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700 hover:border-gray-600'
            : 'bg-white hover:shadow-xl border border-gray-100 hover:border-gray-200'
        }
      `}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Quick Add Button Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={handleAddToCart}
            disabled={!isStockAvailable}
            className={`
              w-full py-2.5 px-4 rounded-lg text-sm font-medium
              transition-all duration-200
              ${
                isStockAvailable
                  ? isDark
                    ? 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
                    : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-600'
              }
            `}
          >
            {isStockAvailable ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add to Cart
              </span>
            ) : (
              'Sold Out'
            )}
          </button>
        </div>

        {/* Stock Badge */}
        {!isStockAvailable && (
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-red-500 text-white text-xs font-semibold shadow-lg">
            Sold Out
          </div>
        )}
        {isStockAvailable && product.stock < 5 && (
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-amber-500 text-white text-xs font-semibold shadow-lg">
            Only {product.stock} Left
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category */}
        <div
          className={`text-xs uppercase tracking-wider font-semibold mb-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}
        >
          {product.category}
        </div>

        {/* Product Name */}
        <h3
          className={`
            text-base font-medium leading-tight mb-3
            line-clamp-2 min-h-[2.5rem]
            transition-colors duration-200
            ${isDark ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'}
          `}
          title={product.name}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating || 0)
                    ? 'text-amber-400 fill-current'
                    : isDark
                      ? 'text-gray-700'
                      : 'text-gray-300'
                }`}
                fill={
                  i < Math.floor(product.rating || 0) ? 'currentColor' : 'none'
                }
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            ))}
          </div>
          <span
            className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            {product.rating?.toFixed(1) || '0.0'}
          </span>
        </div>

        {/* Price */}
        <div className="mt-auto">
          <div
            className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            {formattedPrice}
          </div>
        </div>
      </div>
    </div>
  );
};
