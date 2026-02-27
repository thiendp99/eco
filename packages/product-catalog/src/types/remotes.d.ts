declare module 'shoppingCart/CartStore' {
  import { StoreApi, UseBoundStore } from 'zustand';
  import { CartStore } from '@ecommerce/shared';

  export const useCartStore: UseBoundStore<StoreApi<CartStore>>;
}
