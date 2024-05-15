import { forwardRef, useId } from 'react';
import { css } from "@emotion/react";
const Button = forwardRef(function Button(props, forwardedRef) {
    const { fullWidth = true, children, ...rest } = props;
    const buttonId = useId();
    return (React.createElement("button", { ref: forwardedRef, id: buttonId, css: css `
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: ${fullWidth ? '100%' : 'auto'};
        height: 56px;
        border: 0 solid transparent;
        border-radius: 16px;
        background-color: '#3182f6';
        color: 'white';
        font-size: 17px;
        font-weight: 600;
        white-space: nowrap;
        user-select: none;
        -webkit-font-smoothing: antialiased;
        transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
        &:focus {
          outline: none;
        }
        &:disabled {
          opacity: 0.26;
          cursor: not-allowed;
        }
        &:active {
          background-color:#1b64da;
        }
      `, ...rest },
        React.createElement("span", null, children)));
});
export default Button;
