import { forwardRef } from 'react';
import Button from './Button';
import { GlobalPortal } from '../GlobalPortal';
const FixedBottomButton = forwardRef(function FixedBottomCTA(props, forwardedRef) {
    return (React.createElement(GlobalPortal.Consumer, null,
        React.createElement("div", { style: {
                position: "fixed",
                left: 0,
                bottom: 0,
                width: "100%",
            } },
            React.createElement("div", { style: {
                    padding: "0 20px 18px"
                } },
                React.createElement(Button, { ...props, ref: forwardedRef })))));
});
export default FixedBottomButton;
