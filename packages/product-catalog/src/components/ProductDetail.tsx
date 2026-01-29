import { useProduct } from '../hooks/useProducts';
import { useCartStore } from 'shoppingCart/CartStore';
import { useThemeStore } from '../stores/themeStore';

interface ProductDetailProps {
  productId: string;
}

const ProductDetail = ({ productId }: ProductDetailProps) => {
  const { data: product, isLoading, error } = useProduct(productId);
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  const handleAddToCart = () => {
    if (product && product.stock > 0) {
      addItem(product);
      openCart();
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] p-8">
        <div className="text-center">
          <div className={`
            w-16 h-16 mx-auto mb-6 rounded-full
            border-4 border-t-4 animate-spin
            ${isDark ? 'border-gray-700 border-t-indigo-500' : 'border-gray-200 border-t-blue-600'}
          `} />
          <div className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Loading product details...
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] p-8">
        <div className={`
          max-w-lg p-8 rounded-2xl border-2 border-red-500
          ${isDark ? 'bg-gray-800 shadow-2xl' : 'bg-white shadow-xl'}
        `}>
          <div className="text-5xl mb-4 text-center">⚠️</div>
          <h2 className="text-2xl font-bold text-red-500 mb-4 text-center">
            Product not found
          </h2>
          <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {error instanceof Error ? error.message : 'Unknown error'}
          </p>
        </div>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Product Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Product Image */}
        <div>
          <div className={`
            relative rounded-2xl overflow-hidden
            ${isDark 
              ? 'shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900' 
              : 'shadow-xl bg-gradient-to-br from-gray-100 to-gray-300'
            }
          `}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
            {product.stock === 0 && (
              <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm uppercase tracking-wide shadow-lg">
                Sold Out
              </div>
            )}
            {product.stock > 0 && product.stock < 5 && (
              <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-extrabold text-sm uppercase tracking-wide shadow-lg">
                Only {product.stock} left
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {product.category}
          </div>

          <h1 className={`text-4xl font-extrabold mb-5 tracking-tight leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {product.name}
          </h1>

          <div className={`
            flex items-center gap-6 py-4 mb-6
            border-t border-b
            ${isDark ? 'border-gray-700' : 'border-gray-200'}
          `}>
            <div className="text-4xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              {formattedPrice}
            </div>
            <div className={`flex items-center gap-2 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              <span className="text-yellow-400 text-xl">★</span>
              <span className="font-semibold text-lg">{product.rating}</span>
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <p className={`text-lg leading-relaxed mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {product.description}
          </p>

          <div className={`
            p-6 rounded-xl mb-8 border
            ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}
          `}>
            <div className="flex items-center gap-3 mb-4">
              <strong className={isDark ? 'text-white' : 'text-gray-900'}>Stock:</strong>
              <span className={`
                px-3 py-1 rounded-lg font-semibold
                ${product.stock > 10 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
                }
              `}>
                {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <strong className={isDark ? 'text-white' : 'text-gray-900'}>SKU:</strong>
              <span className={`font-mono ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {product.id}
              </span>
            </div>
          </div>

          <button
            disabled={product.stock === 0}
            onClick={handleAddToCart}
            className={`
              w-full py-5 rounded-xl text-lg font-bold uppercase tracking-widest
              transition-all duration-300
              ${product.stock > 0
                ? 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-1'
                : isDark
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }
            `}
          >
            {product.stock > 0 ? '🛒 Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>

      {/* Additional Product Information */}
      <div className={`
        p-8 rounded-2xl border
        ${isDark 
          ? 'bg-gray-800 border-gray-700 shadow-2xl' 
          : 'bg-white border-gray-200 shadow-lg'
        }
      `}>
        <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Product Details
        </h2>
        <table className="w-full">
          <tbody>
            <tr className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <td className={`py-4 font-semibold w-1/3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Category
              </td>
              <td className={`py-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {product.category}
              </td>
            </tr>
            <tr className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <td className={`py-4 font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Price
              </td>
              <td className={`py-4 font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {formattedPrice}
              </td>
            </tr>
            <tr className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <td className={`py-4 font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Rating
              </td>
              <td className={`py-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <span className="text-yellow-400">★</span> {product.rating} ({product.reviews} reviews)
              </td>
            </tr>
            <tr className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <td className={`py-4 font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Availability
              </td>
              <td className="py-4">
                <span className={`font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </span>
              </td>
            </tr>
            <tr>
              <td className={`py-4 font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Added Date
              </td>
              <td className={`py-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {new Date(product.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetail;