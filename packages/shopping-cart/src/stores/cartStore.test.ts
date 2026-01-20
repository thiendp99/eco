import { describe, it, expect, beforeEach } from 'vitest';
import { useCartStore } from './cartStore';

describe('CartStore', () => {
  beforeEach(() => {
    useCartStore.setState({ items: [], isOpen: false });
  });

  it('should add item to cart', () => {
    const { addItem } = useCartStore.getState();

    addItem({
      id: '1',
      name: 'Test Product',
      price: 99.99,
      image: 'test.jpg',
      stock: 10,
    });

    expect(useCartStore.getState().items).toHaveLength(1);
    expect(useCartStore.getState().items[0]).toMatchObject({
      id: '1',
      name: 'Test Product',
      quantity: 1,
    });
  });

  it('should increase quantity when adding existing item', () => {
    const { addItem } = useCartStore.getState();

    const item = {
      id: '1',
      name: 'Test Product',
      price: 99.99,
      image: 'test.jpg',
      stock: 10,
    };

    addItem(item);
    addItem(item);

    expect(useCartStore.getState().items).toHaveLength(1);
    expect(useCartStore.getState().items[0].quantity).toBe(2);
  });

  it('should not exceed stock limit', () => {
    const { addItem } = useCartStore.getState();

    const item = {
      id: '1',
      name: 'Test Product',
      price: 99.99,
      image: 'test.jpg',
      stock: 2,
    };

    addItem(item);
    addItem(item);
    addItem(item);

    expect(useCartStore.getState().items[0].quantity).toBe(2);
  });

  it('should remove item from cart', () => {
    const { addItem, removeItem } = useCartStore.getState();

    addItem({
      id: '1',
      name: 'Test Product',
      price: 99.99,
      image: 'test.jpg',
      stock: 10,
    });

    removeItem('1');

    expect(useCartStore.getState().items).toHaveLength(0);
  });

  it('should update quantity', () => {
    const { addItem, updateQuantity } = useCartStore.getState();

    addItem({
      id: '1',
      name: 'Test Product',
      price: 99.99,
      image: 'test.jpg',
      stock: 10,
    });

    updateQuantity('1', 5);

    expect(useCartStore.getState().items[0].quantity).toBe(5);
  });

  it('should remove item when quantity is 0', () => {
    const { addItem, updateQuantity } = useCartStore.getState();

    addItem({
      id: '1',
      name: 'Test Product',
      price: 99.99,
      image: 'test.jpg',
      stock: 10,
    });

    updateQuantity('1', 0);

    expect(useCartStore.getState().items).toHaveLength(0);
  });

  it('should clear cart', () => {
    const { addItem, clearCart } = useCartStore.getState();

    addItem({
      id: '1',
      name: 'Test Product 1',
      price: 99.99,
      image: 'test.jpg',
      stock: 10,
    });

    addItem({
      id: '2',
      name: 'Test Product 2',
      price: 49.99,
      image: 'test.jpg',
      stock: 5,
    });

    clearCart();

    expect(useCartStore.getState().items).toHaveLength(0);
  });

  it('should calculate total items correctly', () => {
    const { addItem } = useCartStore.getState();

    addItem({
      id: '1',
      name: 'Product 1',
      price: 99.99,
      image: 'test.jpg',
      stock: 10,
    });

    addItem({
      id: '1',
      name: 'Product 1',
      price: 99.99,
      image: 'test.jpg',
      stock: 10,
    });

    addItem({
      id: '2',
      name: 'Product 2',
      price: 49.99,
      image: 'test.jpg',
      stock: 5,
    });

    expect(useCartStore.getState().totalItems).toBe(3);
  });

  it('should calculate total price correctly', () => {
    const { addItem } = useCartStore.getState();

    addItem({
      id: '1',
      name: 'Product 1',
      price: 100,
      image: 'test.jpg',
      stock: 10,
    });

    addItem({
      id: '2',
      name: 'Product 2',
      price: 50,
      image: 'test.jpg',
      stock: 5,
    });

    expect(useCartStore.getState().totalPrice).toBe(150);
  });

  it('should toggle cart open state', () => {
    const { toggleCart } = useCartStore.getState();

    expect(useCartStore.getState().isOpen).toBe(false);

    toggleCart();
    expect(useCartStore.getState().isOpen).toBe(true);

    toggleCart();
    expect(useCartStore.getState().isOpen).toBe(false);
  });
});
