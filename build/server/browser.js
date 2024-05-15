import { setupWorker } from 'msw';
//https://mukma.tistory.com/213
import { handlers } from './handlers';
export var serviceWorker = setupWorker.apply(void 0, handlers());
