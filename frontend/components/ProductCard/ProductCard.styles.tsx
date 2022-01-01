import styled from "styled-components";

import { ProductCardStyledProps as Props } from "./ProductCard.types";

const ProductCardStyled = styled.div<Props>`
    max-width: 21rem;

    .ProductCard {
        &__price,
        &__description,
        &__title {
            font-size: 1.4rem;
        }

        &__description {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            width: 100%;
            padding: 0.2rem 0;
        }

        &__bold {
            font-weight: 600;
        }

        &__price {
            padding-bottom: 1.2rem;
        }

        &__options {
            display: flex;
            gap: 1rem;
            padding-top: 1.2rem;

            &__primary {
                background-color: hsla(84, 53%, 36%, 1);
                color: hsl(0deg 0% 100%);
            }

            &__black {
                background-color: hsl(84deg 10% 12%);
                color: hsl(0deg 0% 100%);
            }
        }
    }
`;

export default ProductCardStyled;
