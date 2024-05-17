import React from "react";
import axios from "axios";
import {Navigate, useLocation} from "react-router-dom"
// @ts-ignore
import qs from "qs";

const OAuthLoginResult = () => {

  const {search} = useLocation()
  const query = qs.parse(search, {
    ignoreQueryPrefix: true
  });

  if(query.error) {
    return  <Navigate replace to="/"/>
  } else if (typeof query.returnUrl ==='string'){

    axios.defaults.headers['Authorization'] = `Bearer ${query.accessToken}`;
    return <Navigate replace to={query.returnUrl}/>

  }
  return null

};

export default OAuthLoginResult;
