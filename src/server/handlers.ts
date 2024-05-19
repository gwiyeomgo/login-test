import { http, HttpResponse } from 'msw'
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
    http.get('api/list',({ request, params }) => {
            return HttpResponse.json(
                list,
                {
                    status: 200,
                    statusText: 'Mocked status',
                },
            )
        }
        ),
    http.post('api/auth', ({ request, params }) => {
        return HttpResponse.json(
            {
                accessToken: "testes"
            },
            {
                status: 200,
                statusText: 'Mocked status',
            },
        )
    }),
    http.get('api/my',  ({ request, params }) => {
        return HttpResponse.json(
            {
                permissions: ["test"]
            },
            {
                status: 200,
                statusText: 'Mocked status',
            },
        )
    }),
  ];


