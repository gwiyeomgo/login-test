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
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { forwardRef } from 'react';
import Button from './Button';
import { GlobalPortal } from '../GlobalPortal';
var FixedBottomButton = forwardRef(function FixedBottomCTA(props, forwardedRef) {
    return (_jsx(GlobalPortal.Consumer, { children: _jsx("div", { style: {
                position: "fixed",
                left: 0,
                bottom: 0,
                width: "100%",
            }, children: _jsx("div", { style: {
                    padding: "0 20px 18px"
                }, children: _jsx(Button, __assign({}, props, { ref: forwardedRef })) }) }) }));
});
export default FixedBottomButton;
