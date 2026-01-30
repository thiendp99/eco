import { useState, useEffect } from 'react';
import { ProductFilters as Filters } from '../types/product';
import { useCategories } from '../hooks/useProducts';
import { useThemeStore } from '@ecommerce/shared';

interface ProductFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export const ProductFilters = ({
  filters,
  onFiltersChange,
}: ProductFiltersProps) => {
  const { data: categories } = useCategories();
  const [localFilters, setLocalFilters] = useState(filters);
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleApply = () => {
    onFiltersChange(localFilters);
  };

  const handleReset = () => {
    const emptyFilters: Filters = {};
    setLocalFilters(emptyFilters);
    onFiltersChange(emptyFilters);
  };

  const hasActiveFilters = Object.keys(localFilters).some(
    (key) => localFilters[key as keyof Filters]
  );

  return (
    <div className={`mb-8 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Mobile Filter Toggle - Shopify style */}
      <div className="lg:hidden mb-4">
        <button
          className={`
            w-full py-3 px-4 flex items-center justify-between
            border ${isDark ? 'border-gray-800' : 'border-gray-200'}
            text-sm font-medium
            ${isDark ? 'text-white' : 'text-gray-900'}
          `}
        >
          <span>Filters</span>
          {hasActiveFilters && (
            <span className="px-2 py-0.5 bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-xs">
              {Object.keys(localFilters).length}
            </span>
          )}
        </button>
      </div>

      {/* Filters Section */}
      <div
        className={`border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} pb-6 mb-6`}
      >
        <div className="flex items-center justify-between mb-6">
          <h3>Filter and sort</h3>
          {hasActiveFilters && (
            <button
              onClick={handleReset}
              className={`text-sm underline ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Clear all
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <label
              className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Search
            </label>
            <input
              type="text"
              value={localFilters.search || ''}
              onChange={(e) =>
                setLocalFilters({ ...localFilters, search: e.target.value })
              }
              placeholder="Search products..."
              className={`
                w-full px-4 py-2.5 border text-sm
                transition-colors duration-200
                focus:outline-none focus:ring-2
                ${
                  isDark
                    ? 'bg-gray-950 border-gray-800 text-white placeholder-gray-500 focus:border-white focus:ring-white/20'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:ring-gray-900/10'
                }
              `}
            />
          </div>

          {/* Category */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Category
            </label>
            <select
              value={localFilters.category || ''}
              onChange={(e) =>
                setLocalFilters({
                  ...localFilters,
                  category: e.target.value || undefined,
                })
              }
              className={`
                w-full px-4 py-2.5 border text-sm
                appearance-none bg-no-repeat
                transition-colors duration-200
                focus:outline-none focus:ring-2
                ${
                  isDark
                    ? 'bg-gray-950 border-gray-800 text-white focus:border-white focus:ring-white/20'
                    : 'bg-white border-gray-300 text-gray-900 focus:border-gray-900 focus:ring-gray-900/10'
                }
              `}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${isDark ? '%23fff' : '%23000'}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1rem',
              }}
            >
              <option value="">All categories</option>
              {categories?.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Sort by
            </label>
            <select
              value={localFilters.sortBy || ''}
              onChange={(e) =>
                setLocalFilters({
                  ...localFilters,
                  sortBy: (e.target.value || undefined) as
                    | 'name'
                    | 'price'
                    | 'rating'
                    | undefined,
                })
              }
              className={`
                w-full px-4 py-2.5 border text-sm
                appearance-none bg-no-repeat
                transition-colors duration-200
                focus:outline-none focus:ring-2
                ${
                  isDark
                    ? 'bg-gray-950 border-gray-800 text-white focus:border-white focus:ring-white/20'
                    : 'bg-white border-gray-300 text-gray-900 focus:border-gray-900 focus:ring-gray-900/10'
                }
              `}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${isDark ? '%23fff' : '%23000'}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1rem',
              }}
            >
              <option value="">Featured</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Price Range & Order - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {/* Price Range */}
          <div className="md:col-span-2">
            <label
              className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Price range
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                value={localFilters.minPrice || ''}
                onChange={(e) =>
                  setLocalFilters({
                    ...localFilters,
                    minPrice: e.target.value
                      ? Number(e.target.value)
                      : undefined,
                  })
                }
                placeholder="Min"
                min="0"
                className={`
                  flex-1 px-4 py-2.5 border text-sm
                  transition-colors duration-200
                  focus:outline-none focus:ring-2
                  ${
                    isDark
                      ? 'bg-gray-950 border-gray-800 text-white placeholder-gray-500 focus:border-white focus:ring-white/20'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:ring-gray-900/10'
                  }
                `}
              />
              <span className={isDark ? 'text-gray-600' : 'text-gray-400'}>
                to
              </span>
              <input
                type="number"
                value={localFilters.maxPrice || ''}
                onChange={(e) =>
                  setLocalFilters({
                    ...localFilters,
                    maxPrice: e.target.value
                      ? Number(e.target.value)
                      : undefined,
                  })
                }
                placeholder="Max"
                min="0"
                className={`
                  flex-1 px-4 py-2.5 border text-sm
                  transition-colors duration-200
                  focus:outline-none focus:ring-2
                  ${
                    isDark
                      ? 'bg-gray-950 border-gray-800 text-white placeholder-gray-500 focus:border-white focus:ring-white/20'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-gray-900 focus:ring-gray-900/10'
                  }
                `}
              />
            </div>
          </div>

          {/* Sort Order */}
          <div>
            <label
              className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Order
            </label>
            <select
              value={localFilters.sortOrder || 'asc'}
              onChange={(e) =>
                setLocalFilters({
                  ...localFilters,
                  sortOrder: e.target.value as 'asc' | 'desc',
                })
              }
              className={`
                w-full px-4 py-2.5 border text-sm
                appearance-none bg-no-repeat
                transition-colors duration-200
                focus:outline-none focus:ring-2
                ${
                  isDark
                    ? 'bg-gray-950 border-gray-800 text-white focus:border-white focus:ring-white/20'
                    : 'bg-white border-gray-300 text-gray-900 focus:border-gray-900 focus:ring-gray-900/10'
                }
              `}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${isDark ? '%23fff' : '%23000'}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1rem',
              }}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        {/* Apply Button - Shopify style */}
        <div className="mt-6">
          <button
            onClick={handleApply}
            className={`
              w-full md:w-auto px-6 py-2.5 text-sm font-medium
              transition-colors duration-200
              ${
                isDark
                  ? 'bg-white text-gray-900 hover:bg-gray-100'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }
            `}
          >
            Apply filters
          </button>
        </div>
      </div>
    </div>
  );
};
