import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import axios from 'axios'
import {
  COUNTRIES_FAILURE,
  COUNTRIES_SUCCESS,
  COUNTRIES_REQUEST,
  SuccessAction,
  FailureAction,
  RequestAction,
  pageState,
  CountryAPI,
} from '../../types'

export function fetchSuccess(payload: CountryAPI[]): SuccessAction {
  return {
    type: COUNTRIES_SUCCESS,
    payload,
  }
}

export function fetchFailure(ErrorMessage: string): FailureAction {
  return {
    type: COUNTRIES_FAILURE,
    payload: {
      ErrorMessage,
    },
  }
}

export function fetchRequest(): RequestAction {
  return {
    type: COUNTRIES_REQUEST,
  }
}

export function getCountries() {
  return async function (dispatch: ThunkDispatch<pageState, void, Action>) {
    dispatch(fetchRequest())
    try {
      const res = await axios.get('https://restcountries.com/v3.1/all')
      // console.log(res.data)
      const countriesData = res.data.map((obj: any) => ({
        ...obj,
        isInFavourites: false,
        id: obj.name.common,
      }))
      dispatch(fetchSuccess(countriesData))
    } catch (error) {
      dispatch(fetchFailure('fETCHING ERROR 404'))
    }
  }
}
