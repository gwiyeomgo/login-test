import { forwardRef, useEffect } from "react";
import Button from "./Button";
import { GlobalPortal } from "../GlobalPortal";
import FocusTrap from "focus-trap-react";
const FixedCenterModal = forwardRef(function FixedCenterModal(props) {
    //https://velog.io/@do_dadu/React%EC%97%90%EC%84%9C-Modal-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0feat.-createPortal-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%A7%89%EA%B8%B0
    useEffect(() => {
        document.body.style.cssText = `
        position: fixed; 
        top: -${window.scrollY}px;
        overflow-y: scroll;
        width: 100%;`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);
    return (props.isOpen ? React.createElement(GlobalPortal.Consumer, null,
        React.createElement(FocusTrap, { active: props.isOpen },
            React.createElement("div", { className: "modal", style: {
                    ...props.modalStyle,
                    backgroundColor: 'white',
                    position: "fixed",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    margin: "auto",
                    width: "fit-content",
                    height: "fit-content",
                } },
                props.children,
                React.createElement(Button, { ...props, onClick: props.onClick, "data-testid": "mcb" }, "\uCDE8\uC18C")))) : React.createElement(React.Fragment, null));
});
export default FixedCenterModal;
