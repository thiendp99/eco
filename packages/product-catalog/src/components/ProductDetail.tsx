import { useProduct } from '../hooks/useProducts';
import { useCartStore } from 'shoppingCart/CartStore';
import { useThemeStore } from '@ecommerce/shared';

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
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div
            className={`
            w-12 h-12 mx-auto mb-4 rounded-full
            border-2 border-t-transparent animate-spin
            ${isDark ? 'border-gray-700' : 'border-gray-300'}
          `}
          />
          <div
            className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            Loading...
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] p-8">
        <div
          className={`max-w-md p-8 text-center ${isDark ? 'bg-gray-900' : 'bg-white'}`}
        >
          <div className="text-4xl mb-4">⚠️</div>
          <h2
            className={`text-xl font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Product not found
          </h2>
          <p
            className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            {error instanceof Error
              ? error.message
              : 'The product you are looking for does not exist'}
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
    <div className={`min-h-screen ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb - Shopify style */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <a
                href="/"
                className={`hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Home
              </a>
            </li>
            <li className={isDark ? 'text-gray-600' : 'text-gray-400'}>/</li>
            <li>
              <a
                href="/products"
                className={`hover:underline ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Products
              </a>
            </li>
            <li className={isDark ? 'text-gray-600' : 'text-gray-400'}>/</li>
            <li className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              {product.category}
            </li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Image */}
          <div className="lg:sticky lg:top-8 h-fit">
            <div className="relative aspect-square overflow-hidden bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.stock === 0 && (
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white text-gray-900 text-sm font-medium">
                  Sold out
                </div>
              )}
              {product.stock > 0 && product.stock < 5 && (
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-amber-400 text-gray-900 text-sm font-medium">
                  Only {product.stock} left
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            {/* Category */}
            <div
              className={`text-sm uppercase tracking-wider mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
            >
              {product.category}
            </div>

            {/* Product Title */}
            <h1
              className={`text-3xl lg:text-4xl font-normal mb-4 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-base ${
                      i < Math.floor(product.rating)
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
                className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              >
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div
                className={`text-3xl font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}
              >
                {formattedPrice}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p
                className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
              >
                {product.description}
              </p>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-sm">
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  Availability:
                </span>
                <span
                  className={`font-medium ${
                    product.stock > 0
                      ? 'text-green-600 dark:text-green-500'
                      : 'text-red-600 dark:text-red-500'
                  }`}
                >
                  {product.stock > 0
                    ? `In stock (${product.stock} available)`
                    : 'Out of stock'}
                </span>
              </div>
            </div>

            {/* Add to Cart Button - Shopify style */}
            <div className="mb-8">
              <button
                disabled={product.stock === 0}
                onClick={handleAddToCart}
                className={`
                  w-full py-4 px-6 text-base font-medium
                  transition-all duration-200
                  ${
                    product.stock > 0
                      ? isDark
                        ? 'bg-white text-gray-900 hover:bg-gray-100'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600'
                  }
                `}
              >
                {product.stock > 0 ? 'Add to cart' : 'Sold out'}
              </button>
            </div>

            {/* Additional Info - Shopify collapsible style */}
            <div
              className={`border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
            >
              {/* Product Details */}
              <details
                className={`group border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
              >
                <summary
                  className={`
                  py-4 cursor-pointer flex items-center justify-between
                  text-base font-medium
                  ${isDark ? 'text-white' : 'text-gray-900'}
                `}
                >
                  <span>Product Details</span>
                  <svg
                    className="w-5 h-5 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div
                  className={`pb-4 text-sm space-y-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span
                      className={isDark ? 'text-gray-300' : 'text-gray-900'}
                    >
                      {product.category}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>SKU:</span>
                    <span
                      className={`font-mono text-xs ${isDark ? 'text-gray-300' : 'text-gray-900'}`}
                    >
                      {product.id}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Added:</span>
                    <span
                      className={isDark ? 'text-gray-300' : 'text-gray-900'}
                    >
                      {new Date(product.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </details>

              {/* Shipping & Returns */}
              <details
                className={`group border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
              >
                <summary
                  className={`
                  py-4 cursor-pointer flex items-center justify-between
                  text-base font-medium
                  ${isDark ? 'text-white' : 'text-gray-900'}
                `}
                >
                  <span>Shipping & Returns</span>
                  <svg
                    className="w-5 h-5 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div
                  className={`pb-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  <p className="mb-3">
                    Free shipping on orders over $50. Standard delivery in 5-7
                    business days.
                  </p>
                  <p>
                    30-day return policy. Items must be in original condition
                    with tags attached.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
