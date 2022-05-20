// all commented code are for future use

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import TableRowItem from '../components/TableRow'

import {
  getCountries,
  // addToCart,
  // removeFromCart,
} from '../redux/actions'
import { AppState } from '../types'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TableHeader from '../components/TableHeader'
import { TableBody } from '@mui/material'

export default function Home() {
  const dispatch = useDispatch()

  // data from reducers
  const { countries, isLoading, isError } = useSelector(
    (state: AppState) => state.countriesList
  )
  // const cart = useSelector((state: any) => state.cart)
  // const addCartDispatch = dispatch(addToCart(cart));
  useEffect(() => {
    dispatch(getCountries())
    getCountries()
  }, [dispatch])
  // this was my attempt to run the dispatc in the fucntion and invoke it each time the add to cart was pressed, evidently it was not working
  // function buttonIssue() {
  //   dispatch(addToCart(cart))
  // }

  return (
    <>
      <div>
        {isError && <p>{isError}</p>}
        {isLoading && <Loader isLoading={isLoading} />}
        <TableContainer
          sx={{
            marginTop: '50px',
            marginBottom: '40px',
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHeader />
            <TableBody>
              {countries &&
                countries.map((country) => (
                  //I tried sending it as a prob to the "Add to cart button in TableRow component, but it didnt work. any suggestions?"
                  <TableRowItem country={country} /*addButton={buttonIssue}*/ />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}
