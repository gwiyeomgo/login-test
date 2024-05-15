import styled from '@emotion/styled';
import { http } from '../utils/http';
import axios from "axios";
import { useInternalRouter } from "../hooks/useInternalRouter";
import Button from "../components/Button";
const Form = styled.form `
 display:'flex';
 flex-direction: "column";
 margin-bottom: 10px;
  margin-top: 20px;
`;
const Label = styled.label `
 width:100%;
 font-size: 17px;
`;
const Input = styled.input `
    width:95%;
    border: 1px solid #bcbcbc;
    padding:10px;   
    border-radius: 10px;
    margin-bottom:10px;
    margin-top:10px;
`;
function LoginForm(props) {
    const router = useInternalRouter();
    async function Login(requestBody) {
        const authResponse = await http.post('/auth', requestBody);
        const { accessToken } = authResponse;
        axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
        //토큰으로 회원 조회
        const memberResponse = await http.get("/my");
        console.log(memberResponse);
        router.push('/boards');
    }
    function logout() {
        return http.post("/auth/logout").then(() => {
            delete axios.defaults.headers['Authorization'];
        });
    }
    function checkAuth() {
        // TODO 오류를 대비해 Retry 추가해야
        return axios.get("/auth/check");
    }
    async function silentRefresh() {
        delete axios.defaults.headers['Authorization'];
        const authResponse = await axios.post("/auth/token/refresh");
        const { accessToken } = authResponse.data;
        axios.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
        const memberResponse = await http.get("/my");
        console.log(memberResponse);
        //  MemberContext.memberInformation = memberResponse.data;
    }
    const onFinish = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const formData = new FormData(e.currentTarget); // Get form data
        const id = formData.get('id'); // Get id from form data
        const password = formData.get('psw'); // Get password from form data
        Login({ id, password }).then(() => {
            console.log(id, password); // Log username and password
            props.onClose();
        });
    };
    return React.createElement(Form, { onSubmit: onFinish },
        React.createElement("div", null,
            React.createElement(Label, { htmlFor: "id" },
                React.createElement("b", null, "ID")),
            React.createElement(Input, { type: "text", placeholder: "ID \uB97C \uC785\uB825\uD558\uC138\uC694.", name: "id", required: true }),
            React.createElement(Label, { htmlFor: "psw" },
                React.createElement("b", null, "Password")),
            React.createElement(Input, { type: "password", placeholder: "Password\uB97C \uC785\uB825\uD558\uC138\uC694", name: "psw", required: true }),
            React.createElement(Button, { type: "submit" }, "\uD655\uC778")));
}
export default LoginForm;
