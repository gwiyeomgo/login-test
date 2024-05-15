var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import styled from '@emotion/styled';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n margin: 15px;\n border: 1px solid #bcbcbc;\n background-color: ", ";\n  border-radius: 5px;\n"], ["\n margin: 15px;\n border: 1px solid #bcbcbc;\n background-color: ", ";\n  border-radius: 5px;\n"])), function (_a) {
    var backgroundColor = _a.backgroundColor;
    return (backgroundColor !== "" ? backgroundColor : 'white');
});
var Image = styled.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nwidth:100%;\ncursor: pointer;\nborder-radius: 5px;\ncontent:url(", ");\nbackground-color: ", ";\n\n"], ["\nwidth:100%;\ncursor: pointer;\nborder-radius: 5px;\ncontent:url(", ");\nbackground-color: ", ";\n\n"])), function (_a) {
    var url = _a.url;
    return url;
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return (backgroundColor !== "" ? backgroundColor : 'white');
});
export var BigImageButton = function (_a) {
    var backgroundColor = _a.backgroundColor, url = _a.url, onClick = _a.onClick;
    return _jsx(Container, { backgroundColor: backgroundColor, children: _jsx(Image, { backgroundColor: backgroundColor, url: url, onClick: onClick }) });
};
var templateObject_1, templateObject_2;
