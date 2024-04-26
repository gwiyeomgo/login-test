import { rest } from 'msw';

import { originAccountList } from './__mocks__/accountList';


let accountList = originAccountList;

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
const todos = ["먹기", "자기", "놀기"];
export function handlers() {
  return [
    rest.get("/todos", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(todos));
    }),
    rest.post('/auth', auth),
    rest.get('/my', getMember),
  ];
}

const auth: Parameters<typeof rest.post>[1] = async (req, res, ctx) => {
  const { body } = req;
  console.log(body)
  return res(ctx.status(200), ctx.json({
    accessToken: "testes"
  }));
};

const  getMember :Parameters<typeof rest.get>[1] =  async (req, res, ctx) => {

  return res(ctx.status(200), ctx.json({
    permissions: ["test"]
  }));
};