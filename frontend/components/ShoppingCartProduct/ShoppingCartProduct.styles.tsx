import styled from "styled-components";

import { ShoppingCartProductStyledProps as Props } from "./ShoppingCartProduct.types";

const ShoppingCartProductStyled = styled.div<Props>`
    display: grid;
    grid-template-columns: 8rem auto;
    gap: 1rem;
    padding-bottom: 2rem;
    
    .ShoppingCartProduct {
        &__options {
            &__black {
                background-color: hsl(84deg 10% 12%);
                color: hsl(0deg 0% 100%);
            }
        }
    }
`;

export default ShoppingCartProductStyled;
