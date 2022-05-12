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

    const isDuplicate = state.some(
      (country) => country.name.common === newItem.name.common
    )
    if (isDuplicate) {
      return state
    }

    return [...state, action.payload]
  }
  case 'REMOVE_FROM_CART': {
    // const newItem = action.payload
    // const filteredState = state.filter(
    //   (country) => country.name.common !== newItem.name.common
    // )
    // console.log(filteredState)

    return state
  }
  default:
    return state
  }
}
