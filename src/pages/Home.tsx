import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCountries, addToCart } from '../redux/actions'
import { AppState } from '../types'

export default function Home() {
  const dispatch = useDispatch()

  // data from reducers
  const { countries, isLoaded, isLoading, isError } = useSelector(
    (state: AppState) => state.countriesList
  )
  const cart = useSelector((state: AppState) => state.cart)

  console.log(cart)

  useEffect(() => {
    dispatch(getCountries())
    getCountries()
  }, [dispatch])

  return (
    <>
      //
      <div>
        {isError && <p>{isError}</p>}
        {isLoading && <p>Loading...</p>}
        {isLoaded && <p>Loading...</p>}

        {countries?.map((country) => (
          <div key={country.name.common} style={{ display: 'flex' }}>
            <h4>{country.name.common}</h4>
            <button onClick={() => dispatch(addToCart(country))}>
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
