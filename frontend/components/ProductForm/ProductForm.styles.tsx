import styled from "styled-components";

import { ProductFormStyledProps as Props } from "./ProductForm.types";

const ProductFormStyled = styled.div<Props>`
    .ProductForm {
        &__container {
            display: flex;
            flex-direction: column;
            padding: 2rem;
            gap: 2rem;
            max-width: 55.2rem;
            margin: 0 auto;
        }

        &__submit {
            background-color: hsla(84, 53%, 36%, 1);
            color: hsl(0deg 0% 100%);
            cursor: pointer;
        }
    }
`;

export default ProductFormStyled;
