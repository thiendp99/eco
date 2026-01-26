import { useQuery, useQueryClient } from '@tanstack/react-query';
import { PaginatedProducts, ProductFilters } from '../types/product';
import {
  fetchProducts,
  fetchProductById,
  getCategories,
} from '../api/productsApi';
import { Product } from '@ecommerce/shared';

// Query keys for cache management
export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (page: number, filters?: ProductFilters) =>
    [...productKeys.lists(), page, filters] as const,
  details: () => [...productKeys.all, 'detail'] as const,
  detail: (id: string) => [...productKeys.details(), id] as const,
  categories: ['categories'] as const,
};

// Hook to fetch products list
export const useProducts = (
  page: number = 1,
  pageSize: number = 12,
  filters?: ProductFilters
) => {
  console.log('useProducts', filters);
  return useQuery({
    queryKey: productKeys.list(page, filters),
    queryFn: () => fetchProducts(page, pageSize, filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
    // Keep previous data while fetching new page
    placeholderData: (previousData) => previousData,
  });
};

// Hook to fetch single product
export const useProduct = (id: string) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => fetchProductById(id),
    staleTime: 10 * 60 * 1000, // 10 minutes
    // Initial data từ list nếu có
    initialData: () => {
      const lists = queryClient.getQueriesData<PaginatedProducts>({
        queryKey: productKeys.lists(),
      });
      for (const [, data] of lists) {
        if (data?.products) {
          const product = data.products.find((p: Product) => p.id === id);
          if (product) return product;
        }
      }
      return undefined;
    },
  });
};

// Hook to fetch categories
export const useCategories = () => {
  return useQuery({
    queryKey: productKeys.categories,
    queryFn: getCategories,
    staleTime: 30 * 60 * 1000, // 30 minutes - categories don't change often
  });
};
