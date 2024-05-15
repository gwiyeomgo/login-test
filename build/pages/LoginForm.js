var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import styled from '@emotion/styled';
import { http } from '../utils/http';
import axios from "axios";
import { useInternalRouter } from "../hooks/useInternalRouter";
import Button from "../components/Button";
var Form = styled.form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n display:'flex';\n flex-direction: \"column\";\n margin-bottom: 10px;\n  margin-top: 20px;\n"], ["\n display:'flex';\n flex-direction: \"column\";\n margin-bottom: 10px;\n  margin-top: 20px;\n"])));
var Label = styled.label(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n width:100%;\n font-size: 17px;\n"], ["\n width:100%;\n font-size: 17px;\n"])));
var Input = styled.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    width:95%;\n    border: 1px solid #bcbcbc;\n    padding:10px;   \n    border-radius: 10px;\n    margin-bottom:10px;\n    margin-top:10px;\n"], ["\n    width:95%;\n    border: 1px solid #bcbcbc;\n    padding:10px;   \n    border-radius: 10px;\n    margin-bottom:10px;\n    margin-top:10px;\n"])));
function LoginForm(props) {
    var router = useInternalRouter();
    function Login(requestBody) {
        return __awaiter(this, void 0, void 0, function () {
            var authResponse, accessToken, memberResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, http.post('/auth', requestBody)];
                    case 1:
                        authResponse = _a.sent();
                        accessToken = authResponse.accessToken;
                        axios.defaults.headers['Authorization'] = "Bearer ".concat(accessToken);
                        return [4 /*yield*/, http.get("/my")];
                    case 2:
                        memberResponse = _a.sent();
                        console.log(memberResponse);
                        router.push('/boards');
                        return [2 /*return*/];
                }
            });
        });
    }
    function logout() {
        return http.post("/auth/logout").then(function () {
            delete axios.defaults.headers['Authorization'];
        });
    }
    function checkAuth() {
        // TODO 오류를 대비해 Retry 추가해야
        return axios.get("/auth/check");
    }
    function silentRefresh() {
        return __awaiter(this, void 0, void 0, function () {
            var authResponse, accessToken, memberResponse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        delete axios.defaults.headers['Authorization'];
                        return [4 /*yield*/, axios.post("/auth/token/refresh")];
                    case 1:
                        authResponse = _a.sent();
                        accessToken = authResponse.data.accessToken;
                        axios.defaults.headers['Authorization'] = "Bearer ".concat(accessToken);
                        return [4 /*yield*/, http.get("/my")];
                    case 2:
                        memberResponse = _a.sent();
                        console.log(memberResponse);
                        return [2 /*return*/];
                }
            });
        });
    }
    var onFinish = function (e) {
        e.preventDefault(); // Prevent default form submission behavior
        var formData = new FormData(e.currentTarget); // Get form data
        var id = formData.get('id'); // Get id from form data
        var password = formData.get('psw'); // Get password from form data
        Login({ id: id, password: password }).then(function () {
            console.log(id, password); // Log username and password
            props.onClose();
        });
    };
    return _jsx(Form, { onSubmit: onFinish, children: _jsxs("div", { children: [_jsx(Label, { htmlFor: "id", children: _jsx("b", { children: "ID" }) }), _jsx(Input, { type: "text", placeholder: "ID \uB97C \uC785\uB825\uD558\uC138\uC694.", name: "id", required: true }), _jsx(Label, { htmlFor: "psw", children: _jsx("b", { children: "Password" }) }), _jsx(Input, { type: "password", placeholder: "Password\uB97C \uC785\uB825\uD558\uC138\uC694", name: "psw", required: true }), _jsx(Button, { type: "submit", children: "\uD655\uC778" })] }) });
}
export default LoginForm;
var templateObject_1, templateObject_2, templateObject_3;
