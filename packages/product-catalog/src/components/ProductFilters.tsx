import { useState, useEffect } from 'react';
import { ProductFilters as Filters } from '../types/product';
import { useCategories } from '../hooks/useProducts';

interface ProductFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export const ProductFilters = ({ filters, onFiltersChange }: ProductFiltersProps) => {
  const { data: categories } = useCategories();
  const [localFilters, setLocalFilters] = useState(filters);

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

  return (
    <div
      style={{
        padding: '1.5rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        marginBottom: '1.5rem',
      }}
    >
      <h3 style={{ marginBottom: '1rem' }}>Filters</h3>

      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {/* Search */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
            Search
          </label>
          <input
            type="text"
            value={localFilters.search || ''}
            onChange={(e) => setLocalFilters({ ...localFilters, search: e.target.value })}
            placeholder="Search products..."
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        {/* Category */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
            Category
          </label>
          <select
            value={localFilters.category || ''}
            onChange={(e) =>
              setLocalFilters({ ...localFilters, category: e.target.value || undefined })
            }
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
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

        {/* Price Range */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
            Min Price
          </label>
          <input
            type="number"
            value={localFilters.minPrice || ''}
            onChange={(e) =>
              setLocalFilters({
                ...localFilters,
                minPrice: e.target.value ? Number(e.target.value) : undefined,
              })
            }
            placeholder="0"
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
            Max Price
          </label>
          <input
            type="number"
            value={localFilters.maxPrice || ''}
            onChange={(e) =>
              setLocalFilters({
                ...localFilters,
                maxPrice: e.target.value ? Number(e.target.value) : undefined,
              })
            }
            placeholder="9999"
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        {/* Sort */}
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
            Sort By
          </label>
          <select
            value={localFilters.sortBy || ''}
            onChange={(e) =>
              setLocalFilters({
                ...localFilters,
                sortBy: e.target.value as any || undefined,
              })
            }
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          >
            <option value="">Default</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem' }}>
            Order
          </label>
          <select
            value={localFilters.sortOrder || 'asc'}
            onChange={(e) =>
              setLocalFilters({
                ...localFilters,
                sortOrder: e.target.value as any,
              })
            }
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <button
          onClick={handleApply}
          style={{
            padding: '0.5rem 1.5rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Apply Filters
        </button>
        <button
          onClick={handleReset}
          style={{
            padding: '0.5rem 1.5rem',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
