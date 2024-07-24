import { Context, Dispatch, createContext } from 'react';
import initialState from './store';
import { IAuthState } from './interface';
interface IAuthContext {
  state: IAuthState;
  requestLogin: (email: string, password: string) => void;
  updateAuthorization: (Authorization: string) => void
  onLoading: (isLoading: boolean) => void;
  setUserData: (user:any) => void;
  updateOrder: (order:any) => void;
}

const initialContext = {
  state: initialState,
  requestLogin: () => null,
  onLoading: () => null,
  updateAuthorization: () => null,
  updateOrder: () => null,
  setUserData: () => null,
};

const ClubContext: Context<IAuthContext> = createContext<IAuthContext>(initialContext);


export default ClubContext;
