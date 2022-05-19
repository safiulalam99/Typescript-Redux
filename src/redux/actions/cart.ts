import { CountryAPI, ADD_TO_CART, REMOVE_FROM_CART } from '../../types'

export function addToCart(country: CountryAPI) {
  return {
    type: ADD_TO_CART,
    payload: country,
  }
}
export function removeFromCart(country: CountryAPI) {
  return {
    type: REMOVE_FROM_CART,
    payload: country,
  }
}
