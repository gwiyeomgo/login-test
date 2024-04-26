
import {FormEvent} from "react";
import { http } from '../utils/http';
import axios from "axios";
interface Props{

}

export interface LoginRequestBody {
    id: string;
    password: string;
}
export interface AuthResponse {
    accessToken: string;
    // 다른 프로퍼티들도 정의할 수 있음
}
function LoginForm(props: Props){

    async function Login(requestBody: LoginRequestBody) {
        const authResponse = await http.post<AuthResponse>('/auth', requestBody);
        const {accessToken} = authResponse
        axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
        //토큰으로 회원 조회
        const memberResponse = await http.get("/my");
            console.log(memberResponse)

    }

    function logout() {
        return http.post(  "/auth/logout").then(() => {
            delete axios.defaults.headers['Authorization'];
        });
    }

    function checkAuth() {
        // TODO 오류를 대비해 Retry 추가해야
        return axios.get( "/auth/check");
    }


    async function silentRefresh() {
        delete axios.defaults.headers['Authorization'];
        const authResponse = await axios.post("/auth/token/refresh")
        const {accessToken} = authResponse.data;
        axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
        const memberResponse = await http.get("/my");
        console.log(memberResponse)
      //  MemberContext.memberInformation = memberResponse.data;
    }

    const onFinish = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData(e.currentTarget); // Get form data
        const id = formData.get('id') as string; // Get id from form data
        const password = formData.get('psw') as string; // Get password from form data

        Login({id,password})

        console.log(id, password); // Log username and password
    }
    return <form onSubmit={onFinish}>
        <label htmlFor="id"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="id" required/>
        <label htmlFor="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>
        <button type="submit">Login</button>
    </form>
}
export default LoginForm