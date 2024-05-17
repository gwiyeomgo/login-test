import { rest } from 'msw';
import { originList} from './__mocks__/list';


let list = originList;

class APIError extends Error {
  statusCode: number;
  message: string;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

/**
 * API
 * 각 API는 HTTP handler로 정의되어 있어요. 아래의 handlers와 관련 주석을 확인해주세요.
 */

export const  handlers= [
    rest.get('api/list', (req, res, ctx) => {
        return res(
            ctx.delay(500),
            ctx.status(200),
            ctx.json(list));
    }),
    rest.post('api/auth', (req, res, ctx) => {
        return res(ctx.delay(500),ctx.status(200), ctx.json({
            accessToken: "testes"
        }));

    }),
    rest.get('api/my',  (_, res, ctx) => {
        return res(ctx.delay(300), ctx.status(200), ctx.json(list));
    }),
  ];


