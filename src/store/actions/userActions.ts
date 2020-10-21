import { LOGIN, CARGANDO, ERROR } from '../types/loginTypes'

import axios from 'axios'
import {config} from '../../settings'

export const crearUser = (nuevoUser: any) => async (dispatch: any) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    axios.post(`${config.host_name}user`, nuevoUser)
      .then(({data}: any) =>{

        dispatch({
          type: LOGIN,
          payload: data.body
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