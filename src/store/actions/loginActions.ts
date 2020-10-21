import { LOGIN, CARGANDO, ERROR } from '../types/loginTypes'
import axios from 'axios'
import {config} from '../../settings'

export const login = (datos: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: CARGANDO,
    });

    console.log("====>logina=>", datos)
    axios.post(`${config.host_name}auth`, datos)
      .then((data)=>{

        console.log("=>data=>",data)
        // dispatch({
        //   type: LOGIN,
        //   payload: datos
        // });

      })


  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
  
};