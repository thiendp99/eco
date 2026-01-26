import { Product } from '@ecommerce/shared';
import { useCartStore } from 'shoppingCart/CartStore';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  onViewDetails: (id: string) => void;
}

export const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product);
    openCart();
  };

  const isStockAvailable = product.stock > 0;

  return (
    <div className={styles.card} onClick={() => onViewDetails(product.id)}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.category}>{product.category}</div>
        <h3 className={styles.title} title={product.name}>
          {product.name}
        </h3>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.footer}>
          <div className={styles.price}>${product.price.toFixed(2)}</div>
          <div className={styles.rating}>
            ⭐ {product.rating} ({product.reviews})
          </div>
        </div>

        <div
          className={`${styles.stockStatus} ${
            isStockAvailable ? styles.stockIn : styles.stockOut
          }`}
        >
          {isStockAvailable ? `${product.stock} in stock` : 'Out of stock'}
        </div>
      </div>

      <div className={styles.actions}>
        <button
          onClick={handleAddToCart}
          disabled={!isStockAvailable}
          className={`${styles.button} ${
            isStockAvailable ? styles.buttonEnabled : styles.buttonDisabled
          }`}
        >
          {isStockAvailable ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};
