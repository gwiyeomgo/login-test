
import {BigImageButton} from "./BigImageButton";

const  REST_API_KEY ='test'
const   REDIRECT_URI = 'http://localhost:7000/auth'
function SocialKakao() {
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
        <BigImageButton
            backgroundColor="#FEE500"
            url="./kakao_login_medium_narrow.png"
            onClick={handleLogin}/>
    )
}
export default SocialKakao