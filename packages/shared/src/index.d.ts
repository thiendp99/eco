export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
  stock: number;
  rating?: number;
  reviews?: number;
}
export interface CartItem extends Product {
  quantity: number;
}
export interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Product) => void;
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
