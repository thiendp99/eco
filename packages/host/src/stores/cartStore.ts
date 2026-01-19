// Re-export cart store từ shopping-cart remote
// Tạo file này để Host có thể expose store
export { useCartStore } from 'shoppingCart/CartStore';

// Hoặc nếu muốn tự quản lý trong Host:
/*
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useCartStore = create()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      // ... same implementation as shopping-cart
    }),
    { name: 'shopping-cart' }
  )
);
*/
