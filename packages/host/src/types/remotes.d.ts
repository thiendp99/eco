declare module 'productCatalog/ProductList' {
  import { ComponentType } from 'react';
  const ProductList: ComponentType;
  export default ProductList;
}

declare module 'productCatalog/ProductDetail' {
  import { ComponentType } from 'react';
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

declare module 'shoppingCart/CartStore' {
  import { StoreApi, UseBoundStore } from 'zustand';
  import { CartStore } from '@ecommerce/shared';
  export const useCartStore: UseBoundStore<StoreApi<CartStore>>;
}
