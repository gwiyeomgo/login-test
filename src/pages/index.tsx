import React, {useEffect, useState} from "react";
import { useInternalRouter } from '../hooks/useInternalRouter';
import FixedBottomButton from "../components/FixedBottomButton";
import FixedCenterModal from "../components/FixedCenterModal";
import SocialKakao from "../components/SocialKakao";
import GoogleWorkspace from "../components/GoogleWorkspace";
import {http} from "../utils/http";
import LoginForm from "./LoginForm";


function StartPage() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useInternalRouter();
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    return<>
        <button onClick={openModal}>보기</button>
        <FixedCenterModal isOpen={isOpen} onClick={closeModal}>
            <div style={{width:"200px",height:"100px"}}>
                모달오픈
            </div>
        </FixedCenterModal>
        <LoginForm/>
        <SocialKakao/>
        <GoogleWorkspace
            clientId={"107886566079-02j55505cc18vic1e57i0bf1pgeth831.apps.googleusercontent.com"}
            redirectUri={"http://localhost:2016/api/auth/google-workspace"}
        />
        <FixedBottomButton onClick={() => router.push('/login-form')}>로그인</FixedBottomButton>
        </>
}
export default StartPage;