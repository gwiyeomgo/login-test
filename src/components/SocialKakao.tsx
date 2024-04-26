import {css} from "@emotion/react";

const  REST_API_KEY ='a13a70130de38d97d465a39901909b98'
const   REDIRECT_URI = 'http://localhost:3000/auth'
function SocialKakao() {
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
        <img src="./kakao_login_medium_narrow.png"
             css={css`
               display: inline-flex;
                align-items: center;
                justify-content: center;
                width:"100%";
                border: 1px solid transparent;
                background-color: #FEE500;
                cursor: pointer;
             `}
                 onClick={handleLogin}
        />
    )
}
export default SocialKakao