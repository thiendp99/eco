import { i as importShared } from '../_virtual___federation_fn_import-CyrdDHW1.js';
import { p as persist, c as createJSONStorage } from '../middleware-DqsRACVM.js';

const {create: create$1} = await importShared('zustand');
const useThemeStore = create$1()(persist((set) => ({
    theme: 'light',
    toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    setTheme: (theme) => set({ theme }),
}), {
    name: 'theme-storage',
}));

const {create} = await importShared('zustand');
// No-op storage cho môi trường test/SSR
const memoryStorage = {
    getItem: () => null,
    setItem: () => undefined,
    removeItem: () => undefined,
    clear: () => undefined,
    key: () => null,
    get length() {
        return 0;
    },
};
function computeTotals(items) {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return { totalItems, totalPrice };
}
// Cú pháp create<CartStore>()(...) giúp TS hiểu kiểu dữ liệu của state và actions
const useCartStore = create()(persist((set, get) => ({
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
                const items = state.items.map((i) => i.id === product.id
                    ? { ...i, quantity: Math.min(i.quantity + 1, i.stock) }
                    : i);
                return { items, ...computeTotals(items) };
            }
            else {
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
            const items = state.items.map((item) => item.id === id
                ? { ...item, quantity: Math.min(quantity, item.stock) }
                : item);
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
}), {
    name: 'shopping-cart-storage',
    storage: createJSONStorage(() => typeof localStorage === 'undefined' ? memoryStorage : localStorage),
    partialize: (state) => ({ items: state.items }),
    onRehydrateStorage: () => (state) => {
        if (!state)
            return;
        const { totalItems, totalPrice } = computeTotals(state.items);
        state.totalItems = totalItems;
        state.totalPrice = totalPrice;
    },
}));

export { useCartStore, useThemeStore };
