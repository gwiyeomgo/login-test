var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { useEffect, useState } from "react";
import { getList } from "./remotes";
import FixedBottomButton from "../components/FixedBottomButton";
import { css } from "@emotion/react";
import { useInternalRouter } from "../hooks/useInternalRouter";
import colors from "../constants/colors";
/*
* >는 직계 자식
* :not(:first-of-type)은 첫 번째 자식을 제외한 나머지 요소
* */
export function List(_a) {
    var className = _a.className, children = _a.children;
    return (_jsx("ul", { className: className, css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        padding: 0 24px;\n        display: flex;\n        flex-direction: column;\n        > li:not(:first-of-type) {\n          margin-top: 15px;\n        }\n      "], ["\n        padding: 0 24px;\n        display: flex;\n        flex-direction: column;\n        > li:not(:first-of-type) {\n          margin-top: 15px;\n        }\n      "]))), children: children }));
}
List.Row = function (_a) {
    var className = _a.className, left = _a.left, right = _a.right, onClick = _a.onClick;
    return (_jsxs("li", { onClick: onClick, className: className, css: css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            outline: none;\n            border: 0 none;\n            border-bottom: 2px solid ", ";\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n      "], ["\n            outline: none;\n            border: 0 none;\n            border-bottom: 2px solid ", ";\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n      "])), colors.grey300), children: [left, right] }));
};
function BoardPage() {
    var router = useInternalRouter();
    var _a = useState([]), list = _a[0], setList = _a[1];
    useEffect(function () {
        getList().then(function (item) {
            return setList(item);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);
    return (_jsxs(List, { children: [list.map(function (item) {
                return _jsx(List.Row, { left: _jsx("div", { children: "".concat(item.id, ", ").concat(item.content) }), right: _jsx("div", { children: item.memberInfo.name }) });
            }), _jsx(FixedBottomButton, { onClick: function () {
                    router.goBack();
                }, children: "\uB85C\uADF8\uC544\uC6C3" })] }));
}
export default BoardPage;
var templateObject_1, templateObject_2;
