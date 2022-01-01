import React from "react";
import Image from "next/image";

import Styles from "./ShoppingCartProduct.styles";
import { ShoppingCartProductProps as Props } from "./ShoppingCartProduct.types";

const ShoppingCartProduct: React.FC<Props> = (props) => {
    const { product, onDelete } = props;
    const { foto, nombre, descripcion, precio } = product;

    return (
        <Styles className="ShoppingCartProduct">
            <Image
                className="ShoppingCartProduct__image"
                src={foto}
                alt={nombre}
                width={80}
                height={60}
            />
            <div className="ShoppingCartProduct__content">
                <h2 className="ShoppingCartProduct__name">{nombre}</h2>
                <p className="ShoppingCartProduct__description">
                    {descripcion}
                </p>
                <p className="ShoppingCartProduct__price">
                    Desde{" "}
                    <span className="ShoppingCartProduct__bold">${precio}</span>
                </p>
            </div>
            <div className="ShoppingCartProduct__options">
                {onDelete ? (
                    <button
                        className="ShoppingCartProduct__options__black"
                        onClick={onDelete}
                    >
                        Eliminar
                    </button>
                ) : null}
            </div>
        </Styles>
    );
};

ShoppingCartProduct.defaultProps = {};

export default ShoppingCartProduct;
