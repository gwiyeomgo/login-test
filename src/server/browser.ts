import { setupWorker } from 'msw';
//https://mukma.tistory.com/213
import { handlers } from './handlers';

export const serviceWorker = setupWorker(...handlers());

