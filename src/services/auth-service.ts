import { ILoginRequest } from './interface';
import { callRequest } from './utils';

export const loginRequest = async (
  data: ILoginRequest
): Promise<Response> => callRequest('login', 'POST', data);
