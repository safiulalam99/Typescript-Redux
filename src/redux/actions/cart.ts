import { CountryAPI, ADD_TO_CART } from '../../types'

export function addToCart(country: CountryAPI) {
  return {
    type: ADD_TO_CART,
    payload: country,
  }
}
