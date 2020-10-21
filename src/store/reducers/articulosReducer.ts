import {GET_ARTICULOS, CARGANDO, ERROR, CREATE_ARTICULO, UPDATE_ARTICULO, DELETE_ARTICULO} from '../types/articulosTypes'

const INITIAL_STATE = {
  articulos: [],
  loading: false,
  error: ''
};

export default (state = INITIAL_STATE, action:any) => {
  switch (action.type) {

    case CARGANDO:
      return { ...state, loading: true}

    case ERROR:
      return { ...state, error: action.payload, loading:false }

    case CREATE_ARTICULO:
      return { ...state, articulos: [...state.articulos, action.payload], loading:false }

    case UPDATE_ARTICULO:
      
      const oldArticulos = state.articulos.filter((item: any)=> action.payload.id != item.id)
      return { ...state, articulos: [...oldArticulos, action.payload], loading:false }

    case DELETE_ARTICULO:
      
      const articulosUpdate = state.articulos.filter((item: any)=> action.payload != item.id)
      return { ...state, articulos: articulosUpdate, loading:false }

    case GET_ARTICULOS:
      return { ...state, articulos: action.payload, loading:false}
    
    default: 
      return state;
  }

}
