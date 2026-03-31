import React from 'react';
import { Product } from '@ecommerce/shared';
import { useCartStore } from 'shoppingCart/CartStore';
import { useThemeStore } from '@ecommerce/shared';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (id: string) => void;
  style?: React.CSSProperties;
  className?: string;
}

export const ProductCard = ({
  product,
  onViewDetails,
  style,
  className = '',
}: ProductCardProps) => {
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
      style={style}
      onClick={() => onViewDetails(product.id)}
      className={`
        group relative cursor-pointer
        flex flex-col h-full
        rounded-2xl overflow-hidden
        transition-all duration-300 ease-out
        transform hover:-translate-y-1
        ${
          isDark
            ? 'bg-slate-900 border border-slate-800 hover:border-slate-600 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
            : 'bg-white border border-gray-100 hover:border-indigo-100/50 hover:shadow-[0_8px_30px_rgba(79,70,229,0.08)]'
        }
        ${className}
      `}
    >
      {/* Image Container */}
      <div
        className={`relative w-full aspect-[4/5] overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-gray-50'}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />

        {/* Quick Add Button Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
          <button
            onClick={handleAddToCart}
            disabled={!isStockAvailable}
            className={`
              pointer-events-auto
              relative w-full py-3 px-4 rounded-xl text-sm font-bold
              transition-all duration-300 overflow-hidden flex items-center justify-center gap-2
              ${
                isStockAvailable
                  ? isDark
                    ? 'bg-indigo-500 hover:bg-indigo-400 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-[0_4px_20px_rgba(79,70,229,0.3)]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-slate-800 dark:text-slate-500'
              }
            `}
          >
            {isStockAvailable && (
              <div className="absolute inset-0 bg-white/20 translate-y-full hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            )}
            <span className="relative z-10 flex items-center gap-2">
              {isStockAvailable ? (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </>
              ) : (
                'Out of Stock'
              )}
            </span>
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {!isStockAvailable && (
            <div className="px-3 py-1.5 rounded-lg bg-red-500 text-white text-xs font-bold tracking-wide shadow-lg backdrop-blur-md">
              SOLD OUT
            </div>
          )}
          {isStockAvailable && product.stock < 5 && (
            <div className="px-3 py-1.5 rounded-lg bg-orange-500 text-white text-xs font-bold tracking-wide shadow-lg backdrop-blur-md">
              ONLY {product.stock} LEFT
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow relative z-10">
        {/* Category */}
        <div
          className={`text-xs uppercase tracking-wider font-bold mb-2 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}
        >
          {product.category}
        </div>

        {/* Product Name */}
        <h3
          className={`
            text-base font-semibold leading-snug mb-3
            line-clamp-2 min-h-[3rem]
            transition-colors duration-200
            ${isDark ? 'text-slate-200 group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-indigo-700'}
          `}
          title={product.name}
        >
          {product.name}
        </h3>

        {/* Rating & Price row */}
        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5">
              <Star
                className={`w-4 h-4 ${isDark ? 'text-amber-400 fill-amber-400/20' : 'text-amber-500 fill-amber-500/20'}`}
              />
              <span
                className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
              >
                {product.rating?.toFixed(1) || '0.0'}
              </span>
            </div>
          </div>

          <div
            className={`text-lg font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            {formattedPrice}
          </div>
        </div>
      </div>
    </div>
  );
};
