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
        transition-all duration-200 ease-in-out
        ${isDark ? 'bg-gray-900 hover:bg-gray-850' : 'bg-white hover:shadow-lg'}
      `}
    >
      {/* Image Container - Shopify style with subtle hover zoom */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Quick Add Button - Shopify style overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={handleAddToCart}
            disabled={!isStockAvailable}
            className={`
              w-full py-3 px-4 text-sm font-medium
              transition-all duration-200
              ${
                isStockAvailable
                  ? isDark
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            {isStockAvailable ? 'Add to cart' : 'Sold out'}
          </button>
        </div>

        {/* Stock Badge - Top left */}
        {!isStockAvailable && (
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-white text-gray-900 text-xs font-medium">
            Sold out
          </div>
        )}
        {isStockAvailable && product.stock < 5 && (
          <div className="absolute top-3 left-3 px-2.5 py-1 bg-amber-400 text-gray-900 text-xs font-medium">
            Low stock
          </div>
        )}
      </div>

      {/* Content Area - Clean Shopify spacing */}
      <div className="p-4 flex flex-col flex-grow gap-2">
        {/* Category - Small uppercase text */}
        <div
          className={`text-xs uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
        >
          {product.category}
        </div>

        {/* Product Name - Shopify's clean typography */}
        <h3
          className={`
            text-base font-normal leading-tight
            line-clamp-2 min-h-[2.5rem]
            group-hover:underline
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}
          title={product.name}
        >
          {product.name}
        </h3>

        {/* Rating - Inline style */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`text-sm ${
                  i < Math.floor(product.rating || 0)
                    ? 'text-yellow-400'
                    : isDark
                      ? 'text-gray-700'
                      : 'text-gray-300'
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span
            className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            {product.rating}
          </span>
        </div>

        {/* Price - Bold and prominent */}
        <div className="mt-auto pt-2">
          <div
            className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            {formattedPrice}
          </div>
        </div>
      </div>
    </div>
  );
};
