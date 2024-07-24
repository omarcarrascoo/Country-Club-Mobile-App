import { IAction, IAuthState } from './interface';
import CLUBACTIONS from './actions';

const clubReducer = (
  currentState: IAuthState,
  action: IAction
) => {
  const { type, payload } = action;

  switch (type) {
    case CLUBACTIONS.login:
      return {
        ...currentState,
        auth: {
          ...currentState.auth,
          authenticated: true
        },
        user: {
          ...currentState.user,
          ...payload
        }
      };
    case CLUBACTIONS.auth:
        return {
          ...currentState,
          auth: {
            // ...currentState.auth,
            // authenticated: true,
            ...payload

          }
        };

    case CLUBACTIONS.onLoading:
      return {
        ...currentState,
        loading: payload
      };

    case CLUBACTIONS.onError:
      return {
        ...currentState,
        error: payload
      };
    case CLUBACTIONS.UPDATE_AUTHORIZATION:
        return {
          ...currentState,
          token: {
            ...currentState.token,
            Authorization: action.payload.Authorization,
          },
      };
    case CLUBACTIONS.UPDATE_AUTHORIZATION:
        return {
          ...currentState,
          token: {
            ...currentState.token,
            Authorization: action.payload.Authorization,
          },
    };
    case CLUBACTIONS.order:
      return {
        ...currentState,
        order: {
          ...currentState.order,
          ...payload
        },
    };

    default:
      return currentState;
  }
};

export default clubReducer;
