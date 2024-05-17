import styled from '@emotion/styled';
import {FormEvent} from "react";
import { http } from '../utils/http';
import axios from "axios";
import {useInternalRouter} from "../hooks/useInternalRouter";
import Button from "../components/Button";
import {getAuth} from "./remotes";

interface LoginFormProps{
    onClose : ()=>void
}

const Form = styled.form`
 display:'flex';
 flex-direction: "column";
 margin-bottom: 10px;
  margin-top: 20px;
`;

const Label = styled.label`
 width:100%;
 font-size: 17px;
`;

const Input = styled.input`
    width:95%;
    border: 1px solid #bcbcbc;
    padding:10px;   
    border-radius: 10px;
    margin-bottom:10px;
    margin-top:10px;
`;


export interface LoginRequestBody {
    id: string;
    password: string;
}
export interface AuthResponse {
    accessToken: string;
    // 다른 프로퍼티들도 정의할 수 있음
}
function LoginForm(props: LoginFormProps){
    const router = useInternalRouter();

    async function Login(requestBody: LoginRequestBody) {
        const authResponse = await getAuth(requestBody);
        const {accessToken} = authResponse
        axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
        //토큰으로 회원 조회
        const memberResponse = await http.get("api/my");
        console.log(memberResponse)
        router.push('/boards')
    }

    function logout() {
        return http.post(  "api/auth/logout").then(() => {
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
        const memberResponse = await http.get("api/my");
        console.log(memberResponse)
      //  MemberContext.memberInformation = memberResponse.data;
    }

    const onFinish = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData(e.currentTarget); // Get form data
        const id = formData.get('id') as string; // Get id from form data
        const password = formData.get('psw') as string; // Get password from form data

        Login({id,password}).then(()=>{
            console.log(id, password); // Log username and password
            props.onClose()
        }).catch((err)=>{
            console.log(err.message)
        })

    }

    return <Form onSubmit={onFinish}>
        <div>
            <Label htmlFor="id"><b>ID</b></Label>
            <Input type="text" placeholder="ID 를 입력하세요." name="id" required/>
            <Label htmlFor="psw"><b>Password</b></Label>
            <Input type="password" placeholder="Password를 입력하세요" name="psw" required/>
            <Button type="submit">확인</Button>
        </div>
    </Form>
}
export default LoginForm