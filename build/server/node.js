import { setupServer } from 'msw/node'; //https://velog.io/@jeong_lululala/test-msw
import { handlers } from './handlers';
export var server = setupServer.apply(void 0, handlers());
