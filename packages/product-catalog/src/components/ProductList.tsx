import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { ProductFilters } from './ProductFilters';
import ProductDetail from './ProductDetail';
import { ProductFilters as Filters } from '../types/product';
import { useProducts } from '../hooks/useProducts';
import { useThemeStore } from '@ecommerce/shared';
import { AlertCircle, SearchX, ChevronLeft, ChevronRight, Loader2, X } from 'lucide-react';

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<Filters>({});
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const { data, isLoading, error, isFetching } = useProducts(page, 6, filters);

  const handleViewDetails = (id: string) => {
    setSelectedProductId(id);
  };

  const handleCloseDetail = () => {
    setSelectedProductId(null);
  };

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] p-8 animate-fade-up">
        <div className={`max-w-md w-full p-8 md:p-12 text-center rounded-3xl border shadow-xl ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-red-100'}`}>
          <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${isDark ? 'bg-red-500/10 text-red-400' : 'bg-red-50 text-red-500'}`}>
            <AlertCircle className="w-10 h-10" />
          </div>
          <h2 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Oops! Error loading products
          </h2>
          <p className={`text-base ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
            {error instanceof Error ? error.message : 'Something went wrong while connecting to our servers. Please try again later.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Header */}
        <div className="mb-10 lg:mb-16 animate-fade-up">
          <h1 className={`text-xl lg:text-2xl font-extrabold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Discover Products
          </h1>
          <p className={`text-lg font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
            {isLoading ? 'Loading catalog...' : `${data?.total || 0} premium items available`}
          </p>
        </div>

        {/* Filters */}
        <div className="animate-fade-up delay-50">
          <ProductFilters filters={filters} onFiltersChange={setFilters} />
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center min-h-[50vh] animate-fade-in">
            <div className="flex flex-col items-center">
              <Loader2 className={`w-12 h-12 animate-spin mb-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
              <div className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                Fetching our best products...
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Products Grid */}
            {data?.products.length === 0 ? (
              <div className="text-center py-24 animate-fade-up delay-100">
                <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl flex items-center justify-center rotate-3 transition-transform hover:rotate-6 ${isDark ? 'bg-slate-800 text-slate-400' : 'bg-indigo-50 text-indigo-400'}`}>
                  <SearchX className="w-12 h-12" />
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  No products found
                </h3>
                <p className={`text-base mb-8 max-w-md mx-auto ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                  We couldn&apos;t find anything matching your current filters. Try adjusting your search criteria.
                </p>
                <button
                  onClick={() => setFilters({})}
                  className={`
                    px-8 py-3.5 rounded-full text-sm font-bold tracking-wide
                    transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                    ${isDark
                      ? 'bg-white text-gray-900 hover:bg-slate-200'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }
                  `}
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <>
                {/* Product Count with Loading Indicator */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>
                    Showing {data?.products.length} of {data?.total} results
                  </div>
                  {isFetching && (
                    <div className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full ${isDark ? 'bg-slate-800 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Updating catalog...
                    </div>
                  )}
                </div>

                {/* Grid */}
                <div
                  data-testid="product-grid"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
                >
                  {data?.products.map((product, index) => {
                    const staggerDelayClass = `delay-${Math.min((index % 6) * 100, 500)}`;
                    return (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onViewDetails={handleViewDetails}
                        className={`animate-fade-up ${staggerDelayClass}`}
                      />
                    );
                  })}
                </div>
              </>
            )}

            {/* Pagination Component */}
            {data && data.totalPages > 1 && (
              <div className={`flex items-center justify-center gap-2 py-10 border-t ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className={`
                    p-3 rounded-full flex items-center justify-center
                    transition-all duration-200
                    ${page === 1
                      ? isDark ? 'text-slate-600 cursor-not-allowed bg-slate-900' : 'text-gray-300 cursor-not-allowed bg-gray-50'
                      : isDark ? 'text-white hover:bg-slate-800 bg-slate-900' : 'text-gray-700 hover:bg-gray-100 bg-white shadow-sm border border-gray-100'
                    }
                  `}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-1.5 px-2">
                  {[...Array(data.totalPages)].map((_, i) => {
                    const pageNum = i + 1;
                    if (pageNum === 1 || pageNum === data.totalPages || (pageNum >= page - 1 && pageNum <= page + 1)) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setPage(pageNum)}
                          className={`
                            min-w-[40px] h-[40px] flex items-center justify-center text-sm font-bold
                            transition-all duration-200 rounded-full
                            ${page === pageNum
                              ? isDark ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]' : 'bg-indigo-600 text-white shadow-md'
                              : isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                            }
                          `}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (pageNum === page - 2 || pageNum === page + 2) {
                      return (
                        <span key={pageNum} className={`px-1 ${isDark ? 'text-slate-600' : 'text-gray-400'}`}>
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>

                <button
                  onClick={() => setPage((p) => Math.min(data.totalPages, p + 1))}
                  disabled={page === data.totalPages}
                  className={`
                    p-3 rounded-full flex items-center justify-center
                    transition-all duration-200
                    ${page === data.totalPages
                      ? isDark ? 'text-slate-600 cursor-not-allowed bg-slate-900' : 'text-gray-300 cursor-not-allowed bg-gray-50'
                      : isDark ? 'text-white hover:bg-slate-800 bg-slate-900' : 'text-gray-700 hover:bg-gray-100 bg-white shadow-sm border border-gray-100'
                    }
                  `}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        )}

        {/* Product Detail Modal */}
        {selectedProductId && (
          <div className="fixed inset-0 z-50 overflow-y-auto w-full h-full flex flex-col items-center justify-center">
            {/* Backdrop */}
            <div
              className={`fixed inset-0 backdrop-blur-md transition-opacity duration-300 ${isDark ? 'bg-slate-950/80' : 'bg-slate-900/40'}`}
              onClick={handleCloseDetail}
            />

            {/* Modal Content */}
            <div className="relative z-10 w-full px-4 sm:px-6 flex items-center justify-center min-h-screen my-8 animate-fade-up">
              <div
                className={`
                relative max-w-5xl w-full mx-auto overflow-hidden
                rounded-[2rem] shadow-2xl ring-1
                ${isDark ? 'bg-slate-900 ring-white/10' : 'bg-white ring-black/5'}
              `}
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseDetail}
                  className={`
                    absolute top-6 right-6 z-20 p-2.5 rounded-full backdrop-blur-lg
                    transition-all duration-200 hover:scale-110
                    ${isDark
                      ? 'bg-black/20 text-slate-300 hover:text-white hover:bg-black/40 border border-white/10'
                      : 'bg-white/80 text-gray-500 hover:text-gray-900 hover:bg-white border border-gray-200 shadow-sm'
                    }
                  `}
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Product Detail Component */}
                <div className="p-0 max-h-[85vh] overflow-y-auto scrollbar-custom">
                  <ProductDetail productId={selectedProductId} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
