import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { ProductFilters } from './ProductFilters';
import { ProductFilters as Filters } from '../types/product';
import { useProducts } from '../hooks/useProducts';
import { useThemeStore } from '../stores/themeStore';

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<Filters>({});
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const { data, isLoading, error, isFetching } = useProducts(page, 6, filters);

  const handleViewDetails = (id: string) => {
    alert(`Navigate to product detail: ${id}`);
  };

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] p-8">
        <div className={`
          max-w-lg p-8 rounded-2xl border-2 border-red-500
          ${isDark ? 'bg-gray-800 shadow-2xl' : 'bg-white shadow-xl'}
        `}>
          <div className="text-5xl mb-4 text-center">⚠️</div>
          <h2 className="text-2xl font-bold text-red-500 mb-4 text-center">
            Error loading products
          </h2>
          <p className={`text-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {error instanceof Error ? error.message : 'Unknown error'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className={`
        mb-8 p-8 rounded-2xl text-white text-center
        ${isDark 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl' 
          : 'bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl'
        }
      `}>
        <h2 className="text-4xl font-extrabold tracking-tight mb-2">
          🛍️ Product Catalog
        </h2>
        <p className="text-lg opacity-90">
          Discover our amazing collection of products
        </p>
      </div>

      <ProductFilters filters={filters} onFiltersChange={setFilters} />

      {isLoading ? (
        <div className="flex items-center justify-center min-h-[50vh] p-8">
          <div className="text-center">
            <div className={`
              w-16 h-16 mx-auto mb-6 rounded-full
              border-4 border-t-4 animate-spin
              ${isDark ? 'border-gray-700 border-t-indigo-500' : 'border-gray-200 border-t-indigo-600'}
            `} />
            <div className={`text-xl font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Loading products...
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Product Count & Status */}
          <div className={`
            flex justify-between items-center mb-6 p-6 rounded-xl border
            ${isDark 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-gray-50 border-gray-200'
            }
          `}>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📦</span>
              <div>
                <div className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {data?.products.length} Products
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {data?.total} total results
                </div>
              </div>
            </div>
            {isFetching && (
              <div className="flex items-center gap-2 text-indigo-500 font-semibold text-sm">
                <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                Updating...
              </div>
            )}
          </div>

          {/* Products Grid */}
          {data?.products.length === 0 ? (
            <div className={`
              text-center p-16 rounded-2xl border
              ${isDark 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-gray-50 border-gray-200'
              }
            `}>
              <div className="text-6xl mb-4">🔍</div>
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                No products found
              </h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Try adjusting your filters to find what you're looking for
              </p>
            </div>
          ) : (
            <div
              data-testid="product-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {data?.products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {data && data.totalPages > 1 && (
            <div className={`
              flex justify-center items-center gap-4 p-8 rounded-xl border
              ${isDark 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-gray-50 border-gray-200'
              }
            `}>
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className={`
                  px-6 py-3 rounded-xl font-semibold text-sm
                  transition-all duration-300
                  ${page === 1
                    ? 'opacity-40 cursor-not-allowed'
                    : 'hover:-translate-y-1 hover:shadow-lg'
                  }
                  ${isDark
                    ? 'bg-gray-700 text-white'
                    : 'bg-white text-gray-900 shadow-md'
                  }
                `}
              >
                ← Previous
              </button>

              <div className="px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
                <span className="text-sm opacity-90">Page</span>{' '}
                <span className="text-xl">{page}</span>{' '}
                <span className="text-sm opacity-90">of</span>{' '}
                <span className="text-xl">{data.totalPages}</span>
              </div>

              <button
                onClick={() => setPage((p) => Math.min(data.totalPages, p + 1))}
                disabled={page === data.totalPages}
                className={`
                  px-6 py-3 rounded-xl font-semibold text-sm
                  transition-all duration-300
                  ${page === data.totalPages
                    ? 'opacity-40 cursor-not-allowed'
                    : 'hover:-translate-y-1 hover:shadow-lg'
                  }
                  ${isDark
                    ? 'bg-gray-700 text-white'
                    : 'bg-white text-gray-900 shadow-md'
                  }
                `}
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;