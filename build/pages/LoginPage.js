import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { useState } from "react";
import FixedBottomButton from "../components/FixedBottomButton";
import FixedCenterModal from "../components/FixedCenterModal";
import SocialKakao from "../components/SocialKakao";
import GoogleWorkspace from "../components/GoogleWorkspace";
import LoginForm from "./LoginForm";
import styled from "@emotion/styled";
const ButtonList = styled.div `
 display:'flex';
 flex-direction: "column";
`;
function LoginPage() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    return _jsxs(ButtonList, { children: [_jsx(FixedCenterModal, { isOpen: isOpen, onClick: closeModal, modalStyle: { border: "1px solid #bcbcbc", padding: "0px 10px 10px" }, children: _jsx(LoginForm, { onClose: closeModal }) }), _jsx(SocialKakao, {}), _jsx(GoogleWorkspace, { clientId: "test.test.apps.googleusercontent.com", redirectUri: "http://localhost:4000/api/auth/google-workspace" }), _jsx(FixedBottomButton, { onClick: openModal, children: "\uB85C\uADF8\uC778" })] });
}
export default LoginPage;
