// Interfaces and types from component ProductCard

// Component Props
export interface ProductCardProps {
    product: Product;
    onDelete?: () => void;
    onEdit?: () => void;
    onAdd?: () => void;
}

// Styled Component Props
export interface ProductCardStyledProps {
    className: string;
}

export interface Product {
    id: number;
    timestamp: string;
    nombre: string;
    descripcion: string;
    codigo: string;
    precio: number;
    foto: string;
    stock: number;
}