// packages/product-catalog/src/components/ProductDetail.tsx

import { useProduct } from '../hooks/useProducts';

interface ProductDetailProps {
  productId: string;
}

const ProductDetail = ({ productId }: ProductDetailProps) => {
  const { data: product, isLoading, error } = useProduct(productId);

  if (isLoading) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '1.5rem' }}>Loading product details...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: '#dc3545' }}>
        <h2>Product not found</h2>
        <p>{error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          />
        </div>

        {/* Product Info */}
        <div>
          <div
            style={{
              fontSize: '0.875rem',
              color: '#666',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}
          >
            {product.category}
          </div>

          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{product.name}</h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#007bff' }}>
              ${product.price.toFixed(2)}
            </div>
            <div>
              ⭐ {product.rating} ({product.reviews} reviews)
            </div>
          </div>

          <p style={{ fontSize: '1.125rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            {product.description}
          </p>

          <div
            style={{
              padding: '1rem',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px',
              marginBottom: '1.5rem',
            }}
          >
            <div style={{ marginBottom: '0.5rem' }}>
              <strong>Stock:</strong>{' '}
              <span style={{ color: product.stock > 10 ? '#28a745' : '#dc3545' }}>
                {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
              </span>
            </div>
            <div>
              <strong>SKU:</strong> {product.id}
            </div>
          </div>

          <button
            disabled={product.stock === 0}
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1.125rem',
              backgroundColor: product.stock > 0 ? '#28a745' : '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: product.stock > 0 ? 'pointer' : 'not-allowed',
            }}
            onClick={() => {
              if (product.stock > 0) {
                alert(`Added ${product.name} to cart!`);
                // In real app: dispatch to cart store
                // useCartStore.getState().addItem(product);
              }
            }}
          >
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>

      {/* Additional Product Information */}
      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Product Details</h2>
        <div
          style={{
            padding: '1.5rem',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold', width: '30%' }}>
                  Category
                </td>
                <td style={{ padding: '0.75rem' }}>{product.category}</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Price</td>
                <td style={{ padding: '0.75rem' }}>${product.price.toFixed(2)}</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Rating</td>
                <td style={{ padding: '0.75rem' }}>
                  {product.rating} / 5.0 ({product.reviews} reviews)
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Availability</td>
                <td style={{ padding: '0.75rem' }}>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </td>
              </tr>
              <tr>
                <td style={{ padding: '0.75rem', fontWeight: 'bold' }}>Added Date</td>
                <td style={{ padding: '0.75rem' }}>
                  {new Date(product.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;