import { http } from '../utils/http';
import {Item} from "../server/__mocks__/list";

export function getList() {
  return http.get<Item[]>('/api/list');
}

