declare module 'shoppingCart/CartStore' {
  export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    stock: number;
  }

  export interface CartStore {
    items: CartItem[];
    isOpen: boolean;
    addItem: (item: Omit<CartItem, 'quantity'>) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    toggleCart: () => void;
    openCart: () => void;
    closeCart: () => void;
    totalItems: number;
    totalPrice: number;
    getItemQuantity: (id: string) => number;
  }

  export const useCartStore: {
    (): CartStore;
    getState: () => CartStore;
    setState: (partial: Partial<CartStore>) => void;
  };
}
