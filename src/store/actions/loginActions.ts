import { LOGIN, CARGANDO, ERROR } from '../types/loginTypes'
import axios from 'axios'
import {config} from '../../settings'

export const login = (datos: any) => async (dispatch: any) => {
  try {
    console.log("=>datos=>",datos)
    
    dispatch({
      type: CARGANDO,
    });

    axios.post(`${config.host_name}auth`, datos)
      .then(({data}: any)=>{
        
        if(data.body != ''){
          dispatch({
            type: LOGIN,
            payload: data.body
          });
        }

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