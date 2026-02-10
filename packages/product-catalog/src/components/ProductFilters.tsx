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
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useThemeStore();
  const isDark = theme === 'dark';

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleApply = () => {
    onFiltersChange(localFilters);
    setIsOpen(false);
  };

  const handleReset = () => {
    const emptyFilters: Filters = {};
    setLocalFilters(emptyFilters);
    onFiltersChange(emptyFilters);
  };

  const hasActiveFilters = Object.keys(localFilters).some(
    (key) => localFilters[key as keyof Filters]
  );

  const activeFiltersCount = Object.keys(localFilters).filter(
    (key) => localFilters[key as keyof Filters]
  ).length;

  return (
    <div className="mb-8">
      {/* Filter Toggle */}
      <div className="mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full py-3 px-4 flex items-center justify-between
            rounded-xl border transition-all duration-200
            text-sm font-medium
            ${
              isDark
                ? 'border-gray-700 bg-gray-800/50 text-white hover:bg-gray-800'
                : 'border-gray-200 bg-white text-gray-900 hover:border-gray-300 shadow-sm hover:shadow'
            }
          `}
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filters
          </span>
          <div className="flex items-center gap-3">
            {hasActiveFilters && (
              <span
                className={`
                px-2.5 py-1 rounded-full text-xs font-semibold
                ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'}
              `}
              >
                {activeFiltersCount}
              </span>
            )}
            <svg
              className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
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
          </div>
        </button>
      </div>

      {/* Filters Content */}
      <div
        className={`
        ${isOpen ? 'block' : 'hidden'}
        transition-all duration-200
      `}
      >
        <div
          className={`
          rounded-xl border p-6
          ${
            isDark
              ? 'border-gray-700 bg-gray-800/30 backdrop-blur-sm'
              : 'border-gray-200 bg-white shadow-sm'
          }
        `}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <h3
                className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}
              >
                Filters
              </h3>
              {hasActiveFilters && (
                <span
                  className={`
                  px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'}
                `}
                >
                  {activeFiltersCount} active
                </span>
              )}
            </div>
            {hasActiveFilters && (
              <button
                onClick={handleReset}
                className={`
                  text-sm font-medium transition-colors duration-200
                  flex items-center gap-1.5
                  ${
                    isDark
                      ? 'text-blue-400 hover:text-blue-300'
                      : 'text-blue-600 hover:text-blue-700'
                  }
                `}
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Clear all
              </button>
            )}
          </div>

          {/* Search - Full Width */}
          <div className="mb-5">
            <label
              htmlFor="search-input"
              className={`block text-xs font-semibold mb-2.5 uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            >
              Search Products
            </label>
            <div className="relative">
              <svg
                className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                id="search-input"
                type="text"
                value={localFilters.search || ''}
                onChange={(e) =>
                  setLocalFilters({ ...localFilters, search: e.target.value })
                }
                placeholder="Search by name, category..."
                className={`
                  w-full pl-11 pr-4 py-3 rounded-xl border text-sm
                  transition-all duration-200
                  focus:outline-none focus:ring-2
                  ${
                    isDark
                      ? 'bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-600'
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-300'
                  }
                `}
              />
            </div>
          </div>

          {/* Category & Sort By */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className={`block text-xs font-semibold mb-2.5 uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Category
              </label>
              <div className="relative">
                <select
                  id="category"
                  value={localFilters.category || ''}
                  onChange={(e) =>
                    setLocalFilters({
                      ...localFilters,
                      category: e.target.value || undefined,
                    })
                  }
                  className={`
                    w-full pl-4 pr-10 py-3 rounded-xl border text-sm
                    appearance-none cursor-pointer
                    transition-all duration-200
                    focus:outline-none focus:ring-2
                    ${
                      isDark
                        ? 'bg-gray-900/50 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-600'
                        : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-300'
                    }
                  `}
                >
                  <option value="">All categories</option>
                  {categories?.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <svg
                  className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
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
              </div>
            </div>

            {/* Sort By */}
            <div>
              <label
                htmlFor="sort-by"
                className={`block text-xs font-semibold mb-2.5 uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Sort By
              </label>
              <div className="relative">
                <select
                  id="sort-by"
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
                    w-full pl-4 pr-10 py-3 rounded-xl border text-sm
                    appearance-none cursor-pointer
                    transition-all duration-200
                    focus:outline-none focus:ring-2
                    ${
                      isDark
                        ? 'bg-gray-900/50 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-600'
                        : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-300'
                    }
                  `}
                >
                  <option value="">Featured</option>
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="rating">Rating</option>
                </select>
                <svg
                  className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
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
              </div>
            </div>
          </div>

          {/* Price Range & Order */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Price Range */}
            <div className="md:col-span-2">
              <label
                htmlFor="price-range"
                className={`block text-xs font-semibold mb-2.5 uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Price Range
              </label>
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <span
                    className={`absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
                  >
                    $
                  </span>
                  <input
                    id="price-range"
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
                      w-full pl-8 pr-4 py-3 rounded-xl border text-sm
                      transition-all duration-200
                      focus:outline-none focus:ring-2
                      ${
                        isDark
                          ? 'bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-600'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-300'
                      }
                    `}
                  />
                </div>
                <span
                  className={`text-sm font-medium ${isDark ? 'text-gray-600' : 'text-gray-400'}`}
                >
                  —
                </span>
                <div className="relative flex-1">
                  <span
                    className={`absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
                  >
                    $
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
                      w-full pl-8 pr-4 py-3 rounded-xl border text-sm
                      transition-all duration-200
                      focus:outline-none focus:ring-2
                      ${
                        isDark
                          ? 'bg-gray-900/50 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-600'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-300'
                      }
                    `}
                  />
                </div>
              </div>
            </div>

            {/* Sort Order */}
            <div>
              <label
                htmlFor="order"
                className={`block text-xs font-semibold mb-2.5 uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              >
                Order
              </label>
              <div className="relative">
                <select
                  id="order"
                  value={localFilters.sortOrder || 'asc'}
                  onChange={(e) =>
                    setLocalFilters({
                      ...localFilters,
                      sortOrder: e.target.value as 'asc' | 'desc',
                    })
                  }
                  className={`
                    w-full pl-4 pr-10 py-3 rounded-xl border text-sm
                    appearance-none cursor-pointer
                    transition-all duration-200
                    focus:outline-none focus:ring-2
                    ${
                      isDark
                        ? 'bg-gray-900/50 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-600'
                        : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20 hover:border-gray-300'
                    }
                  `}
                >
                  <option value="asc">Low to High</option>
                  <option value="desc">High to Low</option>
                </select>
                <svg
                  className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none ${isDark ? 'text-gray-500' : 'text-gray-400'}`}
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
              </div>
            </div>
          </div>

          {/* Apply Button */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={handleApply}
              className={`
                w-full py-3 px-6 rounded-xl
                text-sm font-semibold transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-offset-2
                ${
                  isDark
                    ? 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
                    : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg'
                }`}
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
