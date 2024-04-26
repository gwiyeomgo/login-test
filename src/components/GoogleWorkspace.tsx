import React from "react";
import {css} from "@emotion/react";

function GoogleWorkspace({clientId,redirectUri}:{clientId :string,redirectUri:string}){
    const handleGoogleLoginClick = () => {
        //리다이렉트부분
        let returnUrl = "/"
       const oauthUri = "https://accounts.google.com/o/oauth2/auth"
        const googleOAuthRedirectLoginUrl = window.location.origin  +"/oauth-login-result" + "?returnUrl=" + returnUrl
        window.location.href = oauthUri+`?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&approval_prompt=force&access_type=offline` +"&state=" + encodeURIComponent(googleOAuthRedirectLoginUrl)
    }

    return( <img src="/google-workspace.png"
                 alt="google logo"
                 css={css`
                   display: inline-flex;
                   align-items: center;
                        width:"100%";
                    justify-content: center;
                    border: 1px solid lightgrey;
                    background-color: white;
                    cursor: pointer;
             `} onClick={handleGoogleLoginClick}/>)
}

export default  GoogleWorkspace