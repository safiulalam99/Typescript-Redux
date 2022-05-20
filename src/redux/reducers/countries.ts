import {
  COUNTRIES_FAILURE,
  COUNTRIES_SUCCESS,
  COUNTRIES_REQUEST,
  COUNTRY_NAME_REQUEST,
  COUNTRY_NAME_FAILURE,
  COUNTRY_NAME_SUCCESS,
  pageState,
  countriesAction,
} from '../../types'

const initialState: pageState = {
  countries: [],
  country: [],
  isLoaded: false,
  isLoading: false,
  isError: '',
}

export function countriesReducer(
  state = initialState,
  action: countriesAction
) {
  switch (action.type) {
  case COUNTRIES_REQUEST:
    return { ...state, isLoading: true }

  case COUNTRIES_SUCCESS:
    return {
      ...state,
      countries: action.payload,
      isLoading: false,
      isLoaded: true,
    }

  case COUNTRIES_FAILURE:
    return {
      ...state,
      isLoading: false,
      isError: action.payload.ErrorMessage,
    }
  case COUNTRY_NAME_REQUEST:
    return { ...state, isLoading: true }

  case COUNTRY_NAME_SUCCESS:
    return {
      ...state,
      country: action.payload,
      isLoadiing: false,
      isLoaded: true,
    }

  case COUNTRY_NAME_FAILURE:
    return {
      ...state,
      isLoading: false,
      isError: action.payload.ErrorMessage,
    }

  default:
    return state
  }
}
