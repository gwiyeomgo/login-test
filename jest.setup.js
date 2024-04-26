/* eslint @typescript-eslint/no-var-requires: 0 */
require('@testing-library/jest-dom');
require('jest-canvas-mock');
const { server } = require('./src/server/node');

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'bypass' });
});
afterEach(() => {
  server.resetHandlers();
  jest.clearAllMocks();
});

afterAll(() => {
  server.close();
});
