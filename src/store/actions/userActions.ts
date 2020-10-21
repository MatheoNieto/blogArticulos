import { LOGIN, CARGANDO, ERROR } from '../types/loginTypes'

import axios from 'axios'
import {config} from '../../settings'

export const crearUser = (nuevoUser: any) => async (dispatch: any) => {
  console.log("=======> nuevo user",nuevoUser)
  dispatch({
    type: CARGANDO,
  });

  try {
    axios.post(`${config.host_name}user`, nuevoUser)
      .then((data) =>{
        console.log("====>token=>", data)
        dispatch({
          type: LOGIN,
          payload: data
        });
      })
      .catch((err) =>{
        dispatch({
          type: ERROR,
          payload: err.message,
        });
      })

  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }

};