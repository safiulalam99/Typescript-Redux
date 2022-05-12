import {
  COUNTRIES_FAILURE,
  COUNTRIES_SUCCESS,
  COUNTRIES_REQUEST,
  pageState,
  countriesAction,
} from '../../types'

const initialState: pageState = {
  countries: null,
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
  default:
    return state
  }
}
