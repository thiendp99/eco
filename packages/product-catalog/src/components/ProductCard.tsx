import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onViewDetails: (id: string) => void;
}

export const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  return (
    <div
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
      onClick={() => onViewDetails(product.id)}
    >
      <div
        style={{
          width: '100%',
          height: '200px',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      <div style={{ padding: '1rem' }}>
        <div
          style={{
            fontSize: '0.75rem',
            color: '#666',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
          }}
        >
          {product.category}
        </div>

        <h3
          style={{
            fontSize: '1rem',
            marginBottom: '0.5rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {product.name}
        </h3>

        <p
          style={{
            fontSize: '0.875rem',
            color: '#666',
            marginBottom: '1rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            minHeight: '2.5rem',
          }}
        >
          {product.description}
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.5rem',
          }}
        >
          <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#007bff' }}>
            ${product.price.toFixed(2)}
          </div>
          <div style={{ fontSize: '0.875rem', color: '#666' }}>
            ⭐ {product.rating} ({product.reviews})
          </div>
        </div>

        <div style={{ fontSize: '0.875rem', color: product.stock > 10 ? '#28a745' : '#dc3545' }}>
          {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
        </div>
      </div>
    </div>
  );
};
