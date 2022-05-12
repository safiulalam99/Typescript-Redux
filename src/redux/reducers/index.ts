import { combineReducers } from 'redux'
import { countriesReducer } from './countries'
import { cart } from './cart'

export default combineReducers({
  countriesList: countriesReducer,
  cart,
})
