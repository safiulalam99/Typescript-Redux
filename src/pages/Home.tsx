import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
import Table from '../components/TableRow'

import { getCountries, addToCart, removeFromCart } from '../redux/actions'
import { AppState } from '../types'
// import Table from '@mui/material/Table';

export default function Home() {
  const dispatch = useDispatch()

  // data from reducers
  const { countries, isError } = useSelector(
    (state: AppState) => state.countriesList
  )
  const cart = useSelector((state: any) => state.cart)

  // console.log(cart)

  useEffect(() => {
    dispatch(getCountries())
    getCountries()
  }, [dispatch])

  return (
    <>
      <div>
        {isError && <p>{isError}</p>}

        {countries &&
          countries.map((country) => (
            <div>
              <Table country={country} />

              <button onClick={() => dispatch(addToCart(country))}>
                ADD TO CART
              </button>
              <button onClick={() => dispatch(removeFromCart(cart))}>
                Remove
              </button>
            </div>
          ))}
      </div>
    </>
  )
}
