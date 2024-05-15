import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { BigImageButton } from "./BigImageButton";
function GoogleWorkspace(_a) {
    var clientId = _a.clientId, redirectUri = _a.redirectUri;
    var handleGoogleLoginClick = function () {
        //리다이렉트부분
        var returnUrl = "/";
        var oauthUri = "https://accounts.google.com/o/oauth2/auth";
        var googleOAuthRedirectLoginUrl = window.location.origin + "/oauth-login-result" + "?returnUrl=" + returnUrl;
        window.location.href = oauthUri + "?client_id=".concat(clientId, "&redirect_uri=").concat(redirectUri, "&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&approval_prompt=force&access_type=offline") + "&state=" + encodeURIComponent(googleOAuthRedirectLoginUrl);
    };
    return (_jsx(BigImageButton, { url: "./google-workspace.png", onClick: handleGoogleLoginClick }));
}
export default GoogleWorkspace;
