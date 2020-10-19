import { GET_ARTICULOS } from '../types/articulosTypes'

export const getArticulos = (datos: any) => async (dispatch: any) => {

  dispatch({
    type: GET_ARTICULOS,
    payload: datos
  });
  
};