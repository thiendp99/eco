declare module 'productCatalog/ProductList' {
  import { ComponentType } from 'react';
  const ProductList: ComponentType;
  export default ProductList;
}

declare module 'productCatalog/ProductDetail' {
  import type { ComponentType } from 'react';

  const ProductDetail: ComponentType<{ productId: string }>;
  export default ProductDetail;
}

declare module 'shoppingCart/Cart' {
  import { ComponentType } from 'react';
  const Cart: ComponentType;
  export default Cart;
}

declare module 'shoppingCart/CartButton' {
  import { ComponentType } from 'react';
  const CartButton: ComponentType;
  export default CartButton;
}

// Type for cart store
declare module 'shoppingCart/CartStore' {
  export const useCartStore: any;
}
