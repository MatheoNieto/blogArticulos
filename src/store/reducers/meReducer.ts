import {
  LOGIN,
  CLEARDATA
} from '../types/meTypes'

const INITIAL_STATE={
  names: '',
  usermail: '',
  token: '',
}

export default (state=INITIAL_STATE, action:any)=>{

  switch(action.type){

    case LOGIN:
      
      const {id, names, token, usermail}=  action.payload
      return {
        ...state,
        id,
        names,
        usermail,
        token,
      }

    case CLEARDATA:
      return {
        ...state,
        id: '',
        names: '',
        usermail: '',
        type_user: '',
      }

    default:
      return state
  }
  
}
