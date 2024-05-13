import React from "react";
import {BigImageButton} from "./BigImageButton";

function GoogleWorkspace({clientId,redirectUri}:{clientId :string,redirectUri:string}){
    const handleGoogleLoginClick = () => {
        //리다이렉트부분
        let returnUrl = "/"
       const oauthUri = "https://accounts.google.com/o/oauth2/auth"
        const googleOAuthRedirectLoginUrl = window.location.origin  +"/oauth-login-result" + "?returnUrl=" + returnUrl
        window.location.href = oauthUri+`?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&approval_prompt=force&access_type=offline` +"&state=" + encodeURIComponent(googleOAuthRedirectLoginUrl)
    }
    return(
        <BigImageButton
            url="./google-workspace.png"
            onClick={handleGoogleLoginClick}/>)
}

export default  GoogleWorkspace