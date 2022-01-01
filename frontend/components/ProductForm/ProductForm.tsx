import React from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

import Styles from "./ProductForm.styles";
import { ProductFormProps as Props } from "./ProductForm.types";
import { ProductFormData } from "./ProductForm.types";

const baseURL = "http://localhost:8080/api/productos";

const ProductForm: React.FC<Props> = (props) => {
    const { method, initialValues, onUpdate} = props;
    const { register, handleSubmit, reset } = useForm({
        defaultValues: initialValues,
    });
    const { id } = initialValues ?? {};

    const onSubmit = (data: ProductFormData) => {
        const { precio, stock } = data;
        const newData = {
            ...data,
            timestamp: new Date().toLocaleString(),
            precio: +precio,
            stock: +stock,
        };
        if (method === "POST") {
            axios
                .post(baseURL, newData, {
                    headers: { "Content-Type": "application/json" },
                })
                .then((response) => {
                    console.log("Añadido!", response.data);
                    reset();
                });
            return;
        }
        axios
            .put(`${baseURL}/${id}`, newData, {
                headers: { "Content-Type": "application/json" },
            })
            .then((response) => {
                console.log("Actualizado!", response.data);
                onUpdate?.(response.data)
                reset();
            });
    };

    return (
        <Styles className="ProductForm">
            <form
                className="ProductForm__container"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    {...register("nombre")}
                    type="text"
                    name="nombre"
                    placeholder="Nombre del producto"
                />
                <input
                    {...register("descripcion")}
                    type="text"
                    name="descripcion"
                    placeholder="Descripción del producto"
                />
                <input
                    {...register("codigo")}
                    type="text"
                    name="codigo"
                    placeholder="Código"
                />
                <input
                    {...register("precio")}
                    type="number"
                    min="1"
                    step="any"
                    name="precio"
                    placeholder="Precio"
                />
                <input
                    {...register("foto")}
                    type="text"
                    name="foto"
                    placeholder="Foto del producto"
                />
                <input
                    {...register("stock")}
                    type="number"
                    min="1"
                    step="any"
                    name="stock"
                    placeholder="Stock"
                />
                <input
                    type="submit"
                    value={
                        method === "UPDATE"
                            ? "Actualizar producto"
                            : "Ingresar producto"
                    }
                    className="ProductForm__submit"
                />
            </form>
        </Styles>
    );
};

ProductForm.defaultProps = {};

export default ProductForm;
