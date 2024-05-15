var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from '@emotion/styled';
import colors from '../constants/colors';
var BigInput = styled.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  color: ", ";\n  padding: 0 0 8px;\n  color: ", ";\n  height: 42px;\n  font-weight: 500;\n  font-size: 24px;\n  border-radius: 1px;\n  caret-color: ", ";\n  outline: none;\n  border: 0 none;\n  border-bottom: 2px solid ", ";\n  :focus {\n    border-bottom-color: ", ";\n  }\n  ", "\n  transition: background-color 0.2s ease;\n"], ["\n  width: 100%;\n  color: ", ";\n  padding: 0 0 8px;\n  color: ", ";\n  height: 42px;\n  font-weight: 500;\n  font-size: 24px;\n  border-radius: 1px;\n  caret-color: ", ";\n  outline: none;\n  border: 0 none;\n  border-bottom: 2px solid ", ";\n  :focus {\n    border-bottom-color: ", ";\n  }\n  ", "\n  transition: background-color 0.2s ease;\n"])), colors.grey800, colors.grey900, colors.blue400, colors.grey300, colors.blue400, function (_a) {
    var hasError = _a.hasError;
    return (hasError ? errorStyle : '');
});
var errorStyle = "\n  color: ".concat(colors.red500, ";\n  border-bottom-color: ").concat(colors.red500, ";\n  :focus { border-bottom-color: ").concat(colors.red500, "; }\n");
export default BigInput;
var templateObject_1;
