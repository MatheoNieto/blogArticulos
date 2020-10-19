import { LOGIN } from '../types/meTypes'

export const login = (datos: any) => async (dispatch: any) => {

  dispatch({
    type: LOGIN,
    payload: datos
  });
  
};