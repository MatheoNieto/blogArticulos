import { GET_ARTICULOS } from '../types/articulosTypes'
import axios from 'axios'
import {config} from '../../settings'

export const getArticulos = () => async (dispatch: any) => {

  const datos = await axios.get(`${config.host_name}articulos`)
  
  dispatch({
    type: GET_ARTICULOS,
    payload: datos.data.body
  });
  
};