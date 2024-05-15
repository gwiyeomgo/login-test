import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { MemoryRouter } from 'react-router-dom';
import { GlobalPortal } from '../../GlobalPortal';
export function wrapper(_a, options) {
    var _b;
    var children = _a.children;
    return (_jsx(GlobalPortal.Provider, { children: _jsx(MemoryRouter, { initialEntries: [(_b = options === null || options === void 0 ? void 0 : options.route) !== null && _b !== void 0 ? _b : '/'], children: children }) }));
}
