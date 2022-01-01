// Interfaces and types from component ProductForm

import { Product } from "../ProductCard/ProductCard.types";

// Component Props
export interface ProductFormProps {
    method: "POST" | "UPDATE";
    initialValues?: Product;
    onUpdate?: (product: Product) => void;
}

// Styled Component Props
export interface ProductFormStyledProps {
    className: string;
}

export interface ProductFormData extends Omit<Product, "id"> {}
