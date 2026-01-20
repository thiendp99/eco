import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartStore } from '../types/cart';

// In Node/Vitest environment, `localStorage` may not exist. Provide a safe no-op storage
// so zustand/persist doesn't error or interfere with store behavior during tests.
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

function computeTotals(items: CartStore['items']) {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return { totalItems, totalPrice };
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      // Initial State
      items: [],
      isOpen: false,
      totalItems: 0,
      totalPrice: 0,

      // Actions
      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);

          if (existingItem) {
            // Item exists, increase quantity
            const items = state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: Math.min(i.quantity + 1, i.stock) }
                  : i
              );
            return { items, ...computeTotals(items) };
          } else {
            // New item, add with quantity 1
            const items = [...state.items, { ...item, quantity: 1 }];
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

      getItemQuantity: (id: string) => {
        const item = get().items.find((i) => i.id === id);
        return item?.quantity || 0;
      },
    }),
    {
      name: 'shopping-cart', // LocalStorage key
      storage: createJSONStorage(() =>
        typeof localStorage === 'undefined' ? memoryStorage : localStorage
      ),
      // Only persist items, not UI state (isOpen)
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
