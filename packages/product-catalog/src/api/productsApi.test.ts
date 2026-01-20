import { describe, it, expect } from 'vitest';
import { fetchProducts, fetchProductById, getCategories } from './productsApi';

describe('Products API', () => {
  it('should fetch products', async () => {
    const result = await fetchProducts(1, 12);

    expect(result).toHaveProperty('products');
    expect(result).toHaveProperty('total');
    expect(result.products).toBeInstanceOf(Array);
    expect(result.products.length).toBeGreaterThan(0);
  });

  it('should filter by category', async () => {
    const result = await fetchProducts(1, 12, { category: 'Electronics' });

    expect(result.products.every((p) => p.category === 'Electronics')).toBe(
      true
    );
  });

  it('should filter by price range', async () => {
    const result = await fetchProducts(1, 12, {
      minPrice: 500,
      maxPrice: 1500,
    });

    expect(
      result.products.every((p) => p.price >= 500 && p.price <= 1500)
    ).toBe(true);
  });

  it('should search products', async () => {
    const result = await fetchProducts(1, 12, { search: 'laptop' });

    expect(result.products.length).toBeGreaterThan(0);
    expect(
      result.products.some(
        (p) =>
          p.name.toLowerCase().includes('laptop') ||
          p.description.toLowerCase().includes('laptop')
      )
    ).toBe(true);
  });

  it('should sort products by price', async () => {
    const result = await fetchProducts(1, 12, {
      sortBy: 'price',
      sortOrder: 'asc',
    });

    const prices = result.products.map((p) => p.price);
    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sortedPrices);
  });

  it('should paginate results', async () => {
    const page1 = await fetchProducts(1, 3);
    const page2 = await fetchProducts(2, 3);

    expect(page1.products).toHaveLength(3);
    expect(page2.products).toHaveLength(3);
    expect(page1.products[0].id).not.toBe(page2.products[0].id);
  });

  it('should fetch product by id', async () => {
    const product = await fetchProductById('1');

    expect(product).toHaveProperty('id', '1');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
  });

  it('should throw error for invalid product id', async () => {
    await expect(fetchProductById('invalid')).rejects.toThrow(
      'Product not found'
    );
  });

  it('should get all categories', async () => {
    const categories = await getCategories();

    expect(categories).toBeInstanceOf(Array);
    expect(categories.length).toBeGreaterThan(0);
    expect(categories).toContain('Electronics');
  });
});
