import { CartItem as CartItemType } from '../types/cart';
import { useCartStore } from '../stores/cartStore';

interface CartItemProps {
  item: CartItemType;
}

export const CartItemComponent = ({ item }: CartItemProps) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= item.stock) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        padding: '1rem',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: '80px',
          height: '80px',
          objectFit: 'cover',
          borderRadius: '4px',
        }}
      />

      {/* Product Info */}
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: 0, marginBottom: '0.5rem' }}>{item.name}</h4>
        <div
          style={{
            color: '#666',
            fontSize: '0.875rem',
            marginBottom: '0.5rem',
          }}
        >
          ${item.price.toFixed(2)} each
        </div>

        {/* Quantity Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
            style={{
              padding: '0.25rem 0.5rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: item.quantity <= 1 ? 'not-allowed' : 'pointer',
              backgroundColor: item.quantity <= 1 ? '#f5f5f5' : 'white',
            }}
          >
            -
          </button>

          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              handleQuantityChange(parseInt(e.target.value) || 0)
            }
            min="1"
            max={item.stock}
            style={{
              width: '60px',
              padding: '0.25rem',
              textAlign: 'center',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />

          <button
            onClick={() => handleQuantityChange(item.quantity + 1)}
            disabled={item.quantity >= item.stock}
            style={{
              padding: '0.25rem 0.5rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              cursor: item.quantity >= item.stock ? 'not-allowed' : 'pointer',
              backgroundColor:
                item.quantity >= item.stock ? '#f5f5f5' : 'white',
            }}
          >
            +
          </button>

          <span
            style={{
              fontSize: '0.875rem',
              color: '#666',
              marginLeft: '0.5rem',
            }}
          >
            (Max: {item.stock})
          </span>
        </div>
      </div>

      {/* Price & Remove */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '1.125rem' }}>
          ${(item.price * item.quantity).toFixed(2)}
        </div>

        <button
          onClick={() => removeItem(item.id)}
          style={{
            padding: '0.25rem 0.5rem',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.875rem',
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
