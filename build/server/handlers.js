import { rest } from 'msw';
import { originList } from './__mocks__/list';
let list = originList;
class APIError extends Error {
    statusCode;
    message;
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
/**
 * API
 * 각 API는 HTTP handler로 정의되어 있어요. 아래의 handlers와 관련 주석을 확인해주세요.
 */
export function handlers() {
    return [
        rest.get('/api/list', getList),
        rest.post('/auth', auth),
        rest.get('/my', getMember),
    ];
}
const auth = async (req, res, ctx) => {
    const { body } = req;
    console.log(body);
    return res(ctx.status(200), ctx.json({
        accessToken: "testes"
    }));
};
const getMember = async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({
        permissions: ["test"]
    }));
};
export const getList = async (_, res, ctx) => {
    return res(ctx.delay(300), ctx.status(200), ctx.json(list));
};
