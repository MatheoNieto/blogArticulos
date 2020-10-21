import { GET_ARTICULOS, UPDATE_ARTICULO } from '../types/articulosTypes'
import axios from 'axios'
import {config} from '../../settings'

export const getArticulos = () => async (dispatch: any) => {

  const datos = await axios.get(`${config.host_name}articulos`)
  
  dispatch({
    type: GET_ARTICULOS,
    payload: datos.data.body
  });
  
};

export const updateArticulo = (datosArticulo: any) => async (dispatch: any) => {

  const datos = await axios.put(`${config.host_name}articulos/${datosArticulo.id}`, datosArticulo)
  
  dispatch({
    type: UPDATE_ARTICULO,
    payload: datos.data.body
  });
  
};

export const createArticulo = (datos: any) => async (dispatch: any) => {

  // const datos = await axios.get(`${config.host_name}articulos`)
  
  // dispatch({
  //   type: UPDATE_ARTICULO,
  //   payload: datos.data.body
  // });
  
};