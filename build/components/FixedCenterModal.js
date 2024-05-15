var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "@emotion/react/jsx-runtime";
import { forwardRef, useEffect } from "react";
import Button from "./Button";
import { GlobalPortal } from "../GlobalPortal";
import FocusTrap from "focus-trap-react";
var FixedCenterModal = forwardRef(function FixedCenterModal(props) {
    //https://velog.io/@do_dadu/React%EC%97%90%EC%84%9C-Modal-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0feat.-createPortal-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%A7%89%EA%B8%B0
    useEffect(function () {
        document.body.style.cssText = "\n        position: fixed; \n        top: -".concat(window.scrollY, "px;\n        overflow-y: scroll;\n        width: 100%;");
        return function () {
            var scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);
    return (props.isOpen ? _jsx(GlobalPortal.Consumer, { children: _jsx(FocusTrap, { active: props.isOpen, children: _jsxs("div", { className: "modal", style: __assign(__assign({}, props.modalStyle), { backgroundColor: 'white', position: "fixed", left: 0, right: 0, top: 0, bottom: 0, margin: "auto", width: "fit-content", height: "fit-content" }), children: [props.children, _jsx(Button, __assign({}, props, { onClick: props.onClick, "data-testid": "mcb", children: "\uCDE8\uC18C" }))] }) }) }) : _jsx(_Fragment, {}));
});
export default FixedCenterModal;
