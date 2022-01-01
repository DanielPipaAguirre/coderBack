import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import Styles from "./Modal.styles";
import { ModalProps as Props } from "./Modal.types";

const Modal: React.FC<Props> = (props) => {
    const { show, onClose, children, title } = props;
    const [isBrowser, setIsBrowser] = useState(false);

    const handleCloseClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <Styles className="Modal">
            <div className="Modal__wrapper">
                <div className="Modal__header">
                    <a
                        href="#"
                        onClick={handleCloseClick}
                        className="Modal__close"
                    >
                        x
                    </a>
                    {title && <h2>{title}</h2>}
                </div>
                <div className="Modal__body">{children}</div>
            </div>
        </Styles>
    ) : null;

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    if (!isBrowser) return null;

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root") as HTMLElement
    );
};

Modal.defaultProps = {};

export default Modal;
