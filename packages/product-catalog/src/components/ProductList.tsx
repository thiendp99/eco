import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { ProductFilters } from './ProductFilters';
import { ProductFilters as Filters } from '../types/product';
import { useProducts } from '../hooks/useProducts';
import { useThemeStore } from '@ecommerce/shared';

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
        <div
          className={`max-w-md p-8 text-center ${isDark ? 'bg-gray-900' : 'bg-white'}`}
        >
          <div className="text-4xl mb-4">⚠️</div>
          <h2
            className={`text-xl font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Error loading products
          </h2>
          <p
            className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            {error instanceof Error ? error.message : 'Something went wrong'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header - Shopify minimalist style */}
        <div className="mb-12">
          <h1
            className={`text-3xl lg:text-4xl font-normal mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            All Products
          </h1>
          <p
            className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
          >
            {data?.total || 0} products
          </p>
        </div>

        {/* Filters */}
        <ProductFilters filters={filters} onFiltersChange={setFilters} />

        {isLoading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
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
                Loading products...
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Products Grid */}
            {data?.products.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">🔍</div>
                <h3
                  className={`text-xl font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
                >
                  No products found
                </h3>
                <p
                  className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                >
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={() => setFilters({})}
                  className={`
                    px-6 py-2.5 text-sm font-medium
                    transition-colors duration-200
                    ${
                      isDark
                        ? 'bg-white text-gray-900 hover:bg-gray-100'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }
                  `}
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                {/* Product Count with Loading Indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                  >
                    Showing {data?.products.length} of {data?.total} products
                  </div>
                  {isFetching && (
                    <div className="flex items-center gap-2 text-sm">
                      <div
                        className={`w-4 h-4 border-2 border-t-transparent rounded-full animate-spin ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
                      />
                      <span
                        className={isDark ? 'text-gray-400' : 'text-gray-600'}
                      >
                        Updating...
                      </span>
                    </div>
                  )}
                </div>

                {/* Grid - Shopify style responsive grid */}
                <div
                  data-testid="product-grid"
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-4 gap-y-10 mb-12"
                >
                  {data?.products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Pagination - Shopify minimalist style */}
            {data && data.totalPages > 1 && (
              <div
                className={`flex items-center justify-center gap-2 py-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}
              >
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className={`
                    px-4 py-2 text-sm font-medium
                    transition-colors duration-200
                    ${
                      page === 1
                        ? isDark
                          ? 'text-gray-700 cursor-not-allowed'
                          : 'text-gray-300 cursor-not-allowed'
                        : isDark
                          ? 'text-white hover:bg-gray-900'
                          : 'text-gray-900 hover:bg-gray-100'
                    }
                  `}
                >
                  Previous
                </button>

                <div className="flex items-center gap-1">
                  {[...Array(data.totalPages)].map((_, i) => {
                    const pageNum = i + 1;
                    // Show first page, last page, current page, and pages around current
                    if (
                      pageNum === 1 ||
                      pageNum === data.totalPages ||
                      (pageNum >= page - 1 && pageNum <= page + 1)
                    ) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setPage(pageNum)}
                          className={`
                            min-w-[2.5rem] px-3 py-2 text-sm font-medium
                            transition-colors duration-200
                            ${
                              page === pageNum
                                ? isDark
                                  ? 'bg-white text-gray-900'
                                  : 'bg-gray-900 text-white'
                                : isDark
                                  ? 'text-white hover:bg-gray-900'
                                  : 'text-gray-900 hover:bg-gray-100'
                            }
                          `}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (pageNum === page - 2 || pageNum === page + 2) {
                      return (
                        <span
                          key={pageNum}
                          className={`px-2 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}
                        >
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>

                <button
                  onClick={() =>
                    setPage((p) => Math.min(data.totalPages, p + 1))
                  }
                  disabled={page === data.totalPages}
                  className={`
                    px-4 py-2 text-sm font-medium
                    transition-colors duration-200
                    ${
                      page === data.totalPages
                        ? isDark
                          ? 'text-gray-700 cursor-not-allowed'
                          : 'text-gray-300 cursor-not-allowed'
                        : isDark
                          ? 'text-white hover:bg-gray-900'
                          : 'text-gray-900 hover:bg-gray-100'
                    }
                  `}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
