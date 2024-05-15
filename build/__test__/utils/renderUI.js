import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { MemoryRouter } from 'react-router-dom';
import { GlobalPortal } from '../../GlobalPortal';
export function wrapper({ children }, options) {
    return (_jsx(GlobalPortal.Provider, { children: _jsx(MemoryRouter, { initialEntries: [options?.route ?? '/'], children: children }) }));
}
