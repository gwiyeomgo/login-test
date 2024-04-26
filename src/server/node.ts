import { setupServer } from 'msw/node'; //https://velog.io/@jeong_lululala/test-msw

import { handlers } from './handlers';

export const server = setupServer(...handlers());
