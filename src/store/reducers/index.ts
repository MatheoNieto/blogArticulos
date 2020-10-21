import { combineReducers } from 'redux';
import articulosReducer from '../reducers/articulosReducer'
import meReducer from '../reducers/meReducer'
import loginReducer from '../reducers/loginReducer'

export default combineReducers({
  articulosReducer,
  meReducer,
  loginReducer
});