var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { useState } from "react";
import FixedBottomButton from "../components/FixedBottomButton";
import FixedCenterModal from "../components/FixedCenterModal";
import SocialKakao from "../components/SocialKakao";
import GoogleWorkspace from "../components/GoogleWorkspace";
import LoginForm from "./LoginForm";
import styled from "@emotion/styled";
var ButtonList = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n display:'flex';\n flex-direction: \"column\";\n"], ["\n display:'flex';\n flex-direction: \"column\";\n"])));
function LoginPage() {
    var _a = useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var openModal = function () {
        setIsOpen(true);
    };
    var closeModal = function () {
        setIsOpen(false);
    };
    return _jsxs(ButtonList, { children: [_jsx(FixedCenterModal, { isOpen: isOpen, onClick: closeModal, modalStyle: { border: "1px solid #bcbcbc", padding: "0px 10px 10px" }, children: _jsx(LoginForm, { onClose: closeModal }) }), _jsx(SocialKakao, {}), _jsx(GoogleWorkspace, { clientId: "test.test.apps.googleusercontent.com", redirectUri: "http://localhost:4000/api/auth/google-workspace" }), _jsx(FixedBottomButton, { onClick: openModal, children: "\uB85C\uADF8\uC778" })] });
}
export default LoginPage;
var templateObject_1;
