import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { BigImageButton } from "./BigImageButton";
var REST_API_KEY = 'test';
var REDIRECT_URI = 'http://localhost:7000/auth';
function SocialKakao() {
    // oauth 요청 URL
    var kakaoURL = "https://kauth.kakao.com/oauth/authorize?client_id=".concat(REST_API_KEY, "&redirect_uri=").concat(REDIRECT_URI, "&response_type=code");
    var handleLogin = function () {
        window.location.href = kakaoURL;
    };
    return (_jsx(BigImageButton, { backgroundColor: "#FEE500", url: "./kakao_login_medium_narrow.png", onClick: handleLogin }));
}
export default SocialKakao;
