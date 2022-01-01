// Interfaces and types from component ShoppingCartProduct

import { Product } from "../ProductCard/ProductCard.types";

// Component Props
export interface ShoppingCartProductProps {
  product: Product;
  onDelete?: () => void;
}

// Styled Component Props
export interface ShoppingCartProductStyledProps {
  className: string;
}

export interface Cart {
  id: number;
  timestamp: string;
  products: Product;
}
