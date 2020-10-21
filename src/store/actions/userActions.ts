import { LOGIN, CARGANDO, ERROR } from '../types/loginTypes'

import axios from 'axios'
import {config} from '../../settings'

export const crearUser = (nuevoUser) => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });
  try {
    axios.post(`${config.host_name}user`, nuevoUser)
      .then((data) =>{
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