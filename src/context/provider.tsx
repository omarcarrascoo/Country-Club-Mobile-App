import Context from './context';
import { FC, useReducer } from 'react';
import clubReducer from './reducer';
import initialState from './store';
import { loginRequest } from '../services/auth-service';
import ACTIONS from './actions';
import { NavigationContainerRefWithCurrent } from '@react-navigation/native';
import { makeLoginRequest } from '../redux/loginRedux';

interface IClubProvider {
  children: any;
  navigation: NavigationContainerRefWithCurrent<any>;
}
const ClubProvider: FC<IClubProvider> = ({ children, navigation }) => {
  const [state, dispatch] = useReducer(clubReducer, initialState);

  const onLoading = (isLoading: boolean) => {
    dispatch({
      type: ACTIONS.onLoading,
      payload: isLoading
    });
  };
  const onError = (errorData: { status: boolean; message: string }) => {
    dispatch({
      type: ACTIONS.onError,
      payload: errorData
    });

    if (errorData.status) {
      setTimeout(() => {
        dispatch({
          type: ACTIONS.onError,
          payload: !errorData.status
        });
      }, 5000);
    }
  };
  const requestLogin = async (email: string, password: string) => {
    onLoading(true);

    try {
      // const requestLogin = await loginRequest({
      //   email,
      //   password
      // });
      const user:any = await makeLoginRequest(email, password)
      
      onLoading(false);

      if (!user[0]?.Correo_Electronico) {
        onError({
          status: true,
          message: 'El correo electronico y/o contrasena son incorrectos'
        });
        return;
      }
      onError({
        status: false,
        message: ''
      });
      
      dispatch({
        type: ACTIONS.auth,
        payload: {
          ...user[0]
        }
      });
      
      navigation.navigate('App');
    } catch (e) {
      onLoading(false);
      onError({
        status: true,
        message: 'Ha surgido un error con la conexión al servicio'
      });
      return;
    }

  };
  
  const updateAuthorization = async (newToken: string) => {
    dispatch({
      type: ACTIONS.UPDATE_AUTHORIZATION,
      payload: {
        Authorization: newToken
      }
    });
  };
  const setUserData =  async (user: any) => {
    try {
      dispatch({
        type: ACTIONS.login,
        payload: {
          ...user
        }
      });
    } catch (error) {
      console.log(error);
      
    }
  };
  const updateOrder = (order:any) =>{    
    try {
      dispatch({
        type: ACTIONS.order,
        payload: {
          ...order
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Context.Provider value={{ state, requestLogin, onLoading, updateAuthorization, setUserData, updateOrder }}>
      {children}
    </Context.Provider>
  );
};

export default ClubProvider;
