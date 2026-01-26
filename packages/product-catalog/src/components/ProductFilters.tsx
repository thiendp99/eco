import { useState, useEffect } from 'react';
import { ProductFilters as Filters } from '../types/product';
import { useCategories } from '../hooks/useProducts';

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

  const inputStyle = {
    width: '100%',
    padding: '0.625rem 0.75rem',
    borderRadius: '6px',
    border: '1px solid #d0d0d0',
    fontSize: '0.9rem',
    transition: 'all 0.2s ease',
    outline: 'none',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: '#333',
  };

  const hasActiveFilters = Object.keys(localFilters).some(
    (key) => localFilters[key as keyof Filters]
  );

  return (
    <div
      style={{
        padding: '1.75rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        marginBottom: '1.5rem',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.25rem',
        }}
      >
        <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>
          Filters
        </h3>
        {hasActiveFilters && (
          <span
            style={{
              fontSize: '0.75rem',
              color: '#666',
              backgroundColor: '#e9ecef',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px',
            }}
          >
            Active
          </span>
        )}
      </div>

      <div
        style={{
          display: 'grid',
          gap: '1.25rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        }}
      >
        {/* Search */}
        <div style={{ gridColumn: 'span 2' }}>
          <label style={labelStyle}>Search</label>
          <input
            type="text"
            value={localFilters.search || ''}
            onChange={(e) =>
              setLocalFilters({ ...localFilters, search: e.target.value })
            }
            placeholder="Search products..."
            style={inputStyle}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#007bff';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.1)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d0d0d0';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Category */}
        <div>
          <label style={labelStyle}>Category</label>
          <select
            value={localFilters.category || ''}
            onChange={(e) =>
              setLocalFilters({
                ...localFilters,
                category: e.target.value || undefined,
              })
            }
            style={inputStyle}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#007bff';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.1)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d0d0d0';
              e.currentTarget.style.boxShadow = 'none';
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
          <label style={labelStyle}>Min Price</label>
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
            min="0"
            style={inputStyle}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#007bff';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.1)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d0d0d0';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        <div>
          <label style={labelStyle}>Max Price</label>
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
            min="0"
            style={inputStyle}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#007bff';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.1)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d0d0d0';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Sort */}
        <div>
          <label style={labelStyle}>Sort By</label>
          <select
            value={localFilters.sortBy || ''}
            onChange={(e) =>
              setLocalFilters({
                ...localFilters,
                sortBy:
                  (e.target.value || undefined) as
                    | 'name'
                    | 'price'
                    | 'rating'
                    | undefined,
              })
            }
            style={inputStyle}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#007bff';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.1)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d0d0d0';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <option value="">Default</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>Order</label>
          <select
            value={localFilters.sortOrder || 'asc'}
            onChange={(e) =>
              setLocalFilters({
                ...localFilters,
                sortOrder: e.target.value as 'asc' | 'desc',
              })
            }
            style={inputStyle}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#007bff';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.1)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#d0d0d0';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '0.75rem',
          marginTop: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={handleApply}
          style={{
            padding: '0.625rem 1.75rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 500,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#0056b3';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 123, 255, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#007bff';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Apply Filters
        </button>
        <button
          onClick={handleReset}
          style={{
            padding: '0.625rem 1.75rem',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 500,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#5a6268';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(108, 117, 125, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#6c757d';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};