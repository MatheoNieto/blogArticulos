import { GET_ARTICULOS, UPDATE_ARTICULO, CARGANDO, ERROR, CREATE_ARTICULO, DELETE_ARTICULO } from '../types/articulosTypes'
import axios from 'axios'
import {config} from '../../settings'

export const getArticulos = () => async (dispatch: any) => {

  try {
  axios.get(`${config.host_name}articulos`)
    .then(({data})=>{
      dispatch({
        type: GET_ARTICULOS,
        payload: data.body
      });
    })
    .catch((err)=>{
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

export const updateArticulo = (datosArticulo: any) => async (dispatch: any) => {
  console.log("toSodkf=>", datosArticulo)
  try {
    dispatch({
      type: CARGANDO,
    });
  
    axios.put(`${config.host_name}articulos/${datosArticulo.id}`, datosArticulo)
      .then(({data}) => {

        console.log("=then updated=>data=>",data)
        
        dispatch({
          type: UPDATE_ARTICULO,
          payload: data.body
        });
      })
      .catch((err)=>{
        console.log("=err updated=>data=>",err)

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

export const createArticulo = (datosArticulo: any) => async (dispatch: any) => {

  try {
    
    dispatch({
      type: CARGANDO,
    });
  
    axios.post(`${config.host_name}articulos`, datosArticulo)
      .then(({data}) =>{

        console.log("=>data=>then create=>",data)
        
        dispatch({
          type: CREATE_ARTICULO,
          payload: data.body
        });
      })
      .catch((err)=>{
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

export const deleteArticulo = (idArticulo: string) => async (dispatch: any) => {

  try {
    dispatch({
      type: CARGANDO,
    });
    
    await axios.delete(`${config.host_name}articulos/${idArticulo}`)

    dispatch({
      type: GET_ARTICULOS,
      payload: idArticulo
    });
  
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message,
    });
  }
  
};