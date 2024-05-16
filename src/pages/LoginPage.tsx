import React, { useState} from "react";
import FixedBottomButton from "../components/FixedBottomButton";
import FixedCenterModal from "../components/FixedCenterModal";
import SocialKakao from "../components/SocialKakao";
import GoogleWorkspace from "../components/GoogleWorkspace";

import LoginForm from "./LoginForm";
import styled from "@emotion/styled";


const ButtonList = styled.div`
 display:'flex';
 flex-direction: "column";
`
function LoginPage() {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false)
    };

    return<ButtonList>
        <SocialKakao/>
        <GoogleWorkspace
            clientId={"test.test.apps.googleusercontent.com"}
            redirectUri={"http://localhost:4000/api/auth/google-workspace"}
        />
        <FixedBottomButton onClick={openModal}>로그인</FixedBottomButton>
        <FixedCenterModal
            isOpen={isOpen}
            onClick={closeModal}
            modalStyle={{ border: "1px solid #bcbcbc",padding: "0px 10px 10px"}} >
            <LoginForm onClose={closeModal}/>
        </FixedCenterModal>
        </ButtonList>

}
export default LoginPage;