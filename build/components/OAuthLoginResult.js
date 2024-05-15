import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import axios from "axios";
import { Navigate, useLocation } from "react-router-dom";
import qs from "qs";
const OAuthLoginResult = () => {
    debugger;
    const { search } = useLocation();
    const query = qs.parse(search, {
        ignoreQueryPrefix: true
    });
    if (query.error) {
        return _jsx(Navigate, { replace: true, to: "/" });
    }
    else if (typeof query.returnUrl === 'string') {
        debugger;
        axios.defaults.headers['Authorization'] = `Bearer ${query.accessToken}`;
        return _jsx(Navigate, { replace: true, to: query.returnUrl });
    }
    return null;
};
export default OAuthLoginResult;
