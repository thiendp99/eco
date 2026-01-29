import { Product } from '@ecommerce/shared';
import { useCartStore } from 'shoppingCart/CartStore';
import { useThemeStore } from '../stores/themeStore';

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
        group cursor-pointer rounded-2xl overflow-hidden
        flex flex-col h-full
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl
        ${isDark 
          ? 'bg-gray-800 border border-gray-700 shadow-lg hover:shadow-black/40' 
          : 'bg-white border border-transparent shadow-md hover:shadow-xl'
        }
      `}
    >
      {/* Image Area */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />

        {/* Badges */}
        {!isStockAvailable && (
          <span className="absolute top-3 left-3 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg backdrop-blur-sm z-10">
            Sold Out
          </span>
        )}
        {isStockAvailable && product.stock < 5 && (
          <span className="absolute top-3 left-3 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wide bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 shadow-lg backdrop-blur-sm z-10">
            Only {product.stock} left
          </span>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow gap-2.5">
        {/* Header */}
        <div className="flex justify-between items-center mb-1">
          <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {product.category}
          </span>
          <div className={`flex items-center gap-1 text-sm font-semibold ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
            <span className="text-yellow-400 text-base">★</span>
            {product.rating}
          </div>
        </div>

        {/* Title */}
        <h3
          className={`
            text-base font-bold leading-snug tracking-tight
            line-clamp-2 min-h-[2.8em]
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}
          title={product.name}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed line-clamp-2 min-h-[2.8em] ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {product.description}
        </p>

        {/* Footer: Price & Action */}
        <div className={`flex justify-between items-center mt-auto pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
          <div className={`text-xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {formattedPrice}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!isStockAvailable}
            className={`
              px-5 py-2.5 rounded-xl text-sm font-bold uppercase tracking-wide
              min-w-[90px] shadow-md
              transition-all duration-300
              ${isStockAvailable
                ? isDark
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white hover:-translate-y-0.5 hover:shadow-lg'
                  : 'bg-gray-900 hover:bg-gray-800 text-white hover:-translate-y-0.5 hover:shadow-lg'
                : isDark
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed opacity-60'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-60'
              }
            `}
            title={isStockAvailable ? 'Add to Cart' : 'Out of Stock'}
          >
            {isStockAvailable ? 'Add' : '—'}
          </button>
        </div>
      </div>
    </div>
  );
};