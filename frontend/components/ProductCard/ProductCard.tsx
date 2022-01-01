import React from "react";
import Image from "next/image";

import Styles from "./ProductCard.styles";
import { ProductCardProps as Props } from "./ProductCard.types";

const ProductCard: React.FC<Props> = (props) => {
    const { product, onDelete, onEdit, onAdd } = props;
    const { foto, nombre, descripcion, precio } = product;

    return (
        <Styles className="ProductCard">
            <Image
                className="ProductCard__image"
                src={foto}
                alt={nombre}
                width={960}
                height={720}
            />
            <h2 className="ProductCard__name">{nombre}</h2>
            <p className="ProductCard__description">{descripcion}</p>
            <p className="ProductCard__price">
                Desde <span className="ProductCard__bold">${precio}</span>
            </p>
            {onAdd ? (
                <button
                    className="ProductCard__options__primary"
                    onClick={onAdd}
                >
                    Agregar al carrito
                </button>
            ) : null}
            <div className="ProductCard__options">
                {onEdit ? (
                    <button
                        className="ProductCard__options__secondary"
                        onClick={onEdit}
                    >
                        Editar
                    </button>
                ) : null}
                {onDelete ? (
                    <button
                        className="ProductCard__options__black"
                        onClick={onDelete}
                    >
                        Eliminar
                    </button>
                ) : null}
            </div>
        </Styles>
    );
};

ProductCard.defaultProps = {};

export default ProductCard;
