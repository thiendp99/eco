import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartStore, CartItem } from '@ecommerce/shared';

// No-op storage cho môi trường test/SSR
const memoryStorage: Storage = {
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
  clear: () => undefined,
  key: () => null,
  get length() {
    return 0;
  },
};

function computeTotals(items: CartItem[]) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return { totalItems, totalPrice };
}

// Cú pháp create<CartStore>()(...) giúp TS hiểu kiểu dữ liệu của state và actions
export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // Initial State
      items: [],
      isOpen: false,
      totalItems: 0,
      totalPrice: 0,

      // Actions
      addItem: (product) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === product.id);

          if (existingItem) {
            const items = state.items.map((i) =>
              i.id === product.id
                ? { ...i, quantity: Math.min(i.quantity + 1, i.stock) }
                : i
            );
            return { items, ...computeTotals(items) };
          } else {
            const items = [...state.items, { ...product, quantity: 1 }];
            return { items, ...computeTotals(items) };
          }
        });
      },

      removeItem: (id) => {
        set((state) => {
          const items = state.items.filter((item) => item.id !== id);
          return { items, ...computeTotals(items) };
        });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        set((state) => {
          const items = state.items.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.min(quantity, item.stock) }
              : item
          );
          return { items, ...computeTotals(items) };
        });
      },

      clearCart: () => {
        set({ items: [], totalItems: 0, totalPrice: 0 });
      },

      toggleCart: () => {
        set((state) => ({ isOpen: !state.isOpen }));
      },

      openCart: () => {
        set({ isOpen: true });
      },

      closeCart: () => {
        set({ isOpen: false });
      },

      getItemQuantity: (id) => {
        const item = get().items.find((i) => i.id === id);
        return item?.quantity || 0;
      },
    }),
    {
      name: 'shopping-cart',
      storage: createJSONStorage(() =>
        typeof localStorage === 'undefined' ? memoryStorage : localStorage
      ),
      partialize: (state) => ({ items: state.items }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        const { totalItems, totalPrice } = computeTotals(state.items);
        state.totalItems = totalItems;
        state.totalPrice = totalPrice;
      },
    }
  )
);
