// import { identifier } from '@babel/types'
import { CountryAPI, ADD_TO_CART } from '../../types'

const initialState: CountryAPI[] = []

export function cart(state = initialState, action: any) {
  switch (action.type) {
  case ADD_TO_CART: {
    const isEmpty = state.length === 0
    const newItem = action.payload

    if (isEmpty) {
      return [...state, newItem]
    }
    console.log(newItem)
    const isDuplicate = state.some(
      (country) => country.name.common === newItem.name.common
    )
    if (isDuplicate) {
      return state
    }
    // console.log(state)
    return [...state, action.payload]
  }
  case 'REMOVE_FROM_CART': {
    const newItem = action.payload
    console.log(newItem)
    console.log(state)
    const filteredState = state.filter(
      (country: any) => country.name.common !== newItem.name.common
    )
    console.log(filteredState)

    return state
  }
  default:
    return state
  }
}
