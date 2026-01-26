import { Product, ProductFilters, PaginatedProducts } from '../types/product';
import { MOCK_PRODUCTS } from './mockData';

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchProducts = async (
  page: number = 1,
  pageSize: number = 12,
  filters?: ProductFilters
): Promise<PaginatedProducts> => {
  await delay(500); // Simulate network delay

  let filtered = [...MOCK_PRODUCTS];

  console.log('API: fetchProducts called', { page, filters });

  // Apply filters
  if (filters) {
    if (filters.category) {
      filtered = filtered.filter((p) => p.category === filters.category);
    }
    if (filters.minPrice !== undefined) {
      filtered = filtered.filter((p) => p.price >= filters.minPrice!);
    }
    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter((p) => p.price <= filters.maxPrice!);
    }
    if (filters.search) {
      const search = filters.search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(search) ||
          p.description.toLowerCase().includes(search)
      );
    }
  }

  // Sorting
  if (filters?.sortBy) {
    filtered.sort((a, b) => {
      let comparison = 0;
      switch (filters.sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'price':
          comparison = a.price - b.price;
          break;
        case 'rating':
          comparison = a.rating - b.rating;
          break;
      }
      return filters.sortOrder === 'desc' ? -comparison : comparison;
    });
  }

  // Pagination
  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const products = filtered.slice(start, end);

  return {
    products,
    total,
    page,
    pageSize,
    totalPages,
  };
};

export const fetchProductById = async (id: string): Promise<Product> => {
  await delay(300);

  const product = MOCK_PRODUCTS.find((p) => p.id === id);
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};

export const getCategories = async (): Promise<string[]> => {
  await delay(200);
  const categories = [...new Set(MOCK_PRODUCTS.map((p) => p.category))];
  return categories;
};
