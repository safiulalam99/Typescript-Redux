/* eslint-disable indent */
import { /*useDispatch, */ useSelector } from 'react-redux'
// import { AppState } from '../types'

// import { getCountries, addToCart } from '../redux/actions'

import React from 'react'

export const CartPage = () => {
  //   const dispatch = useDispatch()

  // data from reducers
  const cart = useSelector((state: any) => state.cart)

  //   localStorage.setItem('cart', JSON.stringify(cart))

  // const localCart =   JSON.parse(localStorage.getItem('cart') )

  console.log(cart)
  return (
    <div>
      {cart &&
        cart.map((cartItem: any) => {
          console.log(cartItem)
          return <h2>{cartItem.fifa}</h2>
          // return <CartTable country={cartItem} />
        })}
    </div>
  )
}
