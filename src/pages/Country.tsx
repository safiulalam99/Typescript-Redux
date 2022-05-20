import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CountryCard from '../components/CountryCard'

import { getCountryByName } from '../redux/actions'
import { AppState } from '../types'
// import Table from '@mui/material/Table';

export default function Country() {
  const dispatch = useDispatch()

  // data from reducers
  const { country, isError } = useSelector(
    (state: AppState) => state.countriesList
  )
  const { id } = useParams<{ id: string }>()

  const countryData = useSelector((state: any) =>
    state.countriesList.countries.find((e: any) => e.id === id)
  )

  useEffect(() => {
    dispatch(getCountryByName(id?.toLowerCase()))
  }, [dispatch])

  const countryInfo = !countryData ? country[0] : countryData

  return (
    <>
      <div>
        {isError && <p>{isError}</p>}
        {countryInfo && <CountryCard country={countryInfo} />}
      </div>
    </>
  )
}
