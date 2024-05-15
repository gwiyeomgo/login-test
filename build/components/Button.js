var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { forwardRef, useId } from 'react';
import { css } from "@emotion/react";
var Button = forwardRef(function Button(props, forwardedRef) {
    var _a = props.fullWidth, fullWidth = _a === void 0 ? true : _a, children = props.children, rest = __rest(props, ["fullWidth", "children"]);
    var buttonId = useId();
    return (_jsx("button", __assign({ ref: forwardedRef, id: buttonId, css: css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: ", ";\n        height: 56px;\n        border: 0 solid transparent;\n        border-radius: 16px;\n        background-color: '#3182f6';\n        color: 'white';\n        font-size: 17px;\n        font-weight: 600;\n        white-space: nowrap;\n        user-select: none;\n        -webkit-font-smoothing: antialiased;\n        transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;\n        &:focus {\n          outline: none;\n        }\n        &:disabled {\n          opacity: 0.26;\n          cursor: not-allowed;\n        }\n        &:active {\n          background-color:#1b64da;\n        }\n      "], ["\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: ", ";\n        height: 56px;\n        border: 0 solid transparent;\n        border-radius: 16px;\n        background-color: '#3182f6';\n        color: 'white';\n        font-size: 17px;\n        font-weight: 600;\n        white-space: nowrap;\n        user-select: none;\n        -webkit-font-smoothing: antialiased;\n        transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;\n        &:focus {\n          outline: none;\n        }\n        &:disabled {\n          opacity: 0.26;\n          cursor: not-allowed;\n        }\n        &:active {\n          background-color:#1b64da;\n        }\n      "])), fullWidth ? '100%' : 'auto') }, rest, { children: _jsx("span", { children: children }) })));
});
export default Button;
var templateObject_1;
