import { Action } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import axios from 'axios'
import {
  COUNTRIES_FAILURE,
  COUNTRIES_SUCCESS,
  COUNTRIES_REQUEST,
  COUNTRY_NAME_REQUEST,
  COUNTRY_NAME_FAILURE,
  COUNTRY_NAME_SUCCESS,
  SuccessAction,
  FailureAction,
  RequestAction,
  pageState,
  countryProp,
  CountryNameRequestAction,
  CountryNameFailureAction,
  CountryNameSuccessAction,
  AppState,
} from '../../types'

export function fetchSuccess(payload: countryProp): SuccessAction {
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

// name countries
export function CountryNameSuccess(
  payload: countryProp
): CountryNameSuccessAction {
  return {
    type: COUNTRY_NAME_SUCCESS,
    payload,
  }
}

export function CountryNameFailure(
  ErrorMessage: string
): CountryNameFailureAction {
  return {
    type: COUNTRY_NAME_FAILURE,
    payload: {
      ErrorMessage,
    },
  }
}

export function CountryNameRequest(): CountryNameRequestAction {
  return {
    type: COUNTRY_NAME_REQUEST,
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

export function getCountryByName(name: any) {
  return async function (dispatch: ThunkDispatch<AppState, void, Action>) {
    dispatch(CountryNameRequest())
    try {
      const res = await axios.get(`https://restcountries.com/v3.1/name/${name}`)
      const countriesData = res.data.map((obj: any) => ({
        ...obj,
        isInFavourites: false,
        id: obj.name.common,
      }))
      dispatch(CountryNameSuccess(countriesData))
    } catch (error: any) {
      dispatch(CountryNameFailure('Something went wrong'))
    }
  }
}
