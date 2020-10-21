import {
  ERROR,
  LOGIN,
  CARGANDO,
  LOGOUT
} from '../types/loginTypes'

const INITIAL_STATE={
  error: '',
  loading: false,
  token: '',
}

export default (state=INITIAL_STATE, action:any)=>{

  switch(action.type){

    case LOGIN:
      return {...state, token: action.payload, loading: false }

    case ERROR:
      return {...state, error: action.payload, loading: false }

    case CARGANDO:
      return { ...state, loading: true}
    
    case LOGOUT:
      return {...state, loading: false, token: '', error: ''}

    default:
      return state
  }
  
}
