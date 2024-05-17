import { http } from '../utils/http';
import {Item} from "../server/__mocks__/list";
import {AuthResponse, LoginRequestBody} from "./LoginForm";

export function getList() {
  return http.get<Item[]>('/api/list');
}

export  function  getAuth(requestBody:LoginRequestBody) {
  return http.post<AuthResponse>('/api/auth', requestBody)
}
