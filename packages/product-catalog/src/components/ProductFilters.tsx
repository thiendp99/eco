import { useState, useEffect } from 'react';
import { ProductFilters as Filters } from '../types/product';
import { useCategories } from '../hooks/useProducts';
import { useThemeStore } from '../stores/themeStore';

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
    <div className={`
      p-8 rounded-2xl mb-8 border transition-all duration-300
      ${isDark 
        ? 'bg-gray-800 border-gray-700 shadow-2xl' 
        : 'bg-white border-gray-100 shadow-lg'
      }
    `}>
      {/* Header */}
      <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3.5">
          <h3 className={`text-xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
            🔍 Filters
          </h3>
          {hasActiveFilters && (
            <span className="animate-pulse px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md">
              {Object.keys(localFilters).length} Active
            </span>
          )}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6 items-start">
        {/* Search - Full Width */}
        <div className="md:col-span-2 lg:col-span-2 xl:col-span-2">
          <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Search Products
          </label>
          <input
            type="text"
            value={localFilters.search || ''}
            onChange={(e) =>
              setLocalFilters({ ...localFilters, search: e.target.value })
            }
            placeholder="Search by name or description..."
            className={`
              w-full px-4 py-3.5 rounded-xl border font-medium
              transition-all duration-300
              focus:outline-none focus:ring-4 focus:-translate-y-0.5
              ${isDark
                ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20'
                : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20'
              }
            `}
          />
        </div>

        {/* Category */}
        <div className="lg:col-span-1">
          <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
              w-full px-4 py-3.5 rounded-xl border font-medium cursor-pointer
              appearance-none bg-no-repeat bg-right pr-10
              transition-all duration-300
              focus:outline-none focus:ring-4 focus:-translate-y-0.5
              ${isDark
                ? 'bg-gray-900 border-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500/20'
                : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500/20'
              }
            `}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${isDark ? '%23999' : '%23666'}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.25rem',
            }}
          >
            <option value="">All Categories</option>
            {categories?.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div className="lg:col-span-1">
          <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Sort By
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
              w-full px-4 py-3.5 rounded-xl border font-medium cursor-pointer
              appearance-none bg-no-repeat bg-right pr-10
              transition-all duration-300
              focus:outline-none focus:ring-4 focus:-translate-y-0.5
              ${isDark
                ? 'bg-gray-900 border-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500/20'
                : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500/20'
              }
            `}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${isDark ? '%23999' : '%23666'}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.25rem',
            }}
          >
            <option value="">Default</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        {/* Order */}
        <div className="lg:col-span-1">
          <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
              w-full px-4 py-3.5 rounded-xl border font-medium cursor-pointer
              appearance-none bg-no-repeat bg-right pr-10
              transition-all duration-300
              focus:outline-none focus:ring-4 focus:-translate-y-0.5
              ${isDark
                ? 'bg-gray-900 border-gray-700 text-white focus:border-indigo-500 focus:ring-indigo-500/20'
                : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500/20'
              }
            `}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='${isDark ? '%23999' : '%23666'}'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.25rem',
            }}
          >
            <option value="asc">↑ Ascending</option>
            <option value="desc">↓ Descending</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="lg:col-span-2">
          <label className={`block text-xs font-bold uppercase tracking-widest mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Price Range
          </label>
          <div className="flex items-center gap-2.5">
            <input
              type="number"
              value={localFilters.minPrice || ''}
              onChange={(e) =>
                setLocalFilters({
                  ...localFilters,
                  minPrice: e.target.value ? Number(e.target.value) : undefined,
                })
              }
              placeholder="Min ($)"
              min="0"
              className={`
                flex-1 px-4 py-3.5 rounded-xl border font-medium
                transition-all duration-300
                focus:outline-none focus:ring-4 focus:-translate-y-0.5
                ${isDark
                  ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20'
                  : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20'
                }
              `}
            />
            <span className={`text-xl font-bold ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>—</span>
            <input
              type="number"
              value={localFilters.maxPrice || ''}
              onChange={(e) =>
                setLocalFilters({
                  ...localFilters,
                  maxPrice: e.target.value ? Number(e.target.value) : undefined,
                })
              }
              placeholder="Max ($)"
              min="0"
              className={`
                flex-1 px-4 py-3.5 rounded-xl border font-medium
                transition-all duration-300
                focus:outline-none focus:ring-4 focus:-translate-y-0.5
                ${isDark
                  ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500/20'
                  : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500/20'
                }
              `}
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3.5 mt-8 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
        <button
          onClick={handleReset}
          className={`
            px-8 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wide
            border-2 border-transparent
            transition-all duration-300
            ${isDark
              ? 'text-gray-400 hover:bg-gray-700 hover:text-white hover:border-gray-600'
              : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:border-gray-300'
            }
          `}
        >
          ✕ Reset
        </button>
        <button
          onClick={handleApply}
          className={`
            px-8 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wide
            text-white shadow-lg
            transition-all duration-300
            hover:-translate-y-0.5 hover:shadow-xl
            ${isDark
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
              : 'bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700'
            }
          `}
        >
          ✓ Apply Filters
        </button>
      </div>
    </div>
  );
};