// Interfaces and types from component Modal

// Component Props
export interface ModalProps {
    show: boolean;
    onClose: () => void;
    title?: string;
}

// Styled Component Props
export interface ModalStyledProps {
    className: string;
}
