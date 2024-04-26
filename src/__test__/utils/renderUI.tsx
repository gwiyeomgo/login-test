import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { GlobalPortal } from '../../GlobalPortal';

type Route = `/${string}`;

export function wrapper({ children }: { children: ReactNode }, options?: { route: Route }) {
  return (
    <GlobalPortal.Provider>
      <MemoryRouter initialEntries={[options?.route ?? '/']}>{children}</MemoryRouter>
    </GlobalPortal.Provider>
  );
}
