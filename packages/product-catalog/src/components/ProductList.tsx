import { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
import { ProductFilters } from './ProductFilters';
import { ProductFilters as Filters } from '../types/product';
import { useProducts } from '../hooks/useProducts';

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<Filters>({});

  useEffect(() => {}, [filters]);

  const { data, isLoading, error, isFetching } = useProducts(page, 6, filters);

  const handleViewDetails = (id: string) => {
    alert(`Navigate to product detail: ${id}`);
  };

  if (error) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: '#dc3545' }}>
        <h2>Error loading products</h2>
        <p>{error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ marginBottom: '1.5rem' }}>Product Catalog</h2>

      <ProductFilters filters={filters} onFiltersChange={setFilters} />

      {isLoading ? (
        <div style={{ padding: '3rem', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem' }}>Loading products...</div>
        </div>
      ) : (
        <>
          <div
            style={{
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              Showing {data?.products.length} of {data?.total} products
            </div>
            {isFetching && <div style={{ color: '#666' }}>Updating...</div>}
          </div>

          <div
            data-testid="product-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            {data?.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {/* Pagination */}
          {data && data.totalPages > 1 && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: page === 1 ? 'not-allowed' : 'pointer',
                  opacity: page === 1 ? 0.5 : 1,
                }}
              >
                Previous
              </button>

              <span style={{ padding: '0.5rem 1rem' }}>
                Page {page} of {data.totalPages}
              </span>

              <button
                onClick={() => setPage((p) => Math.min(data.totalPages, p + 1))}
                disabled={page === data.totalPages}
                style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: page === data.totalPages ? 'not-allowed' : 'pointer',
                  opacity: page === data.totalPages ? 0.5 : 1,
                }}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
