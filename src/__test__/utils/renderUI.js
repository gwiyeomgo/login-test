import { MemoryRouter } from 'react-router-dom';
import { GlobalPortal } from '../../GlobalPortal';
export function wrapper({ children }, options) {
    return (React.createElement(GlobalPortal.Provider, null,
        React.createElement(MemoryRouter, { initialEntries: [options?.route ?? '/'] }, children)));
}
