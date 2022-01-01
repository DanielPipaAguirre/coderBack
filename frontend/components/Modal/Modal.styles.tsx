import styled from "styled-components";

import { ModalStyledProps as Props } from "./Modal.types";

const ModalStyled = styled.div<Props>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(0deg 0% 0% / 50%);

    .Modal {
        &__wrapper {
            background: white;
            width: 51.2rem;
            height: 60rem;
            border-radius: 1.6rem;
            padding: 1.6rem;
        }

        &__header {
            display: flex;
            justify-content: flex-start;
            font-size: 2rem;
            position: relative;
        }

        &__close {
            cursor: pointer;
            position: absolute;
            top: 0;
            right: 1.6rem;
        }

        &__body {
            padding-top: 1.2rem;
        }
    }
`;

export default ModalStyled;
