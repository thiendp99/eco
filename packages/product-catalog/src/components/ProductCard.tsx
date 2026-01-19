import { Product } from '../types/product';
// Import cart store dynamically to avoid errors in standalone mode
let useCartStore: any;

// Try to import cart store, fallback to mock if not available
try {
  const module = await import('shoppingCart/CartStore');
  useCartStore = module.useCartStore;
} catch (error) {
  console.warn('CartStore not available in standalone mode');
  useCartStore = () => ({
    addItem: (item: any) => console.log('Mock add item:', item),
    openCart: () => console.log('Mock open cart'),
  });
}

interface ProductCardProps {
  product: Product;
  onViewDetails: (id: string) => void;
}

export const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigate to detail
    
    // Get cart store instance
    const cartStore = useCartStore?.getState?.() || useCartStore();
    
    // Add item to cart
    cartStore.addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      stock: product.stock,
    });
    
    // Open cart drawer (optional)
    cartStore.openCart?.();
    
    // Show toast notification (you can add a toast library)
    alert(`Added ${product.name} to cart!`);
  };

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
    >
      <div onClick={() => onViewDetails(product.id)}>
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

          <div style={{ fontSize: '0.875rem', color: product.stock > 10 ? '#28a745' : '#dc3545', marginBottom: '0.75rem' }}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div style={{ padding: '0 1rem 1rem' }}>
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: product.stock > 0 ? '#28a745' : '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: product.stock > 0 ? 'pointer' : 'not-allowed',
            fontSize: '0.875rem',
            fontWeight: 'bold',
            opacity: product.stock === 0 ? 0.6 : 1,
          }}
        >
          {product.stock > 0 ? '🛒 Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};
