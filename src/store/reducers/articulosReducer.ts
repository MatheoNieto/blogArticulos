import {GET_ARTICULOS} from '../types/articulosTypes'

const INITIAL_STATE = {
  articulos: [],
};

export default (state = INITIAL_STATE, action:any) => {
  switch (action.type) {

    case GET_ARTICULOS:
      return { ...state, articulos: action.payload}
    
    default: 
      return state;
  }

}
