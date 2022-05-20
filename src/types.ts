// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
export const COUNTRIES_REQUEST = 'COUNTRIES_REQUEST'
export const COUNTRIES_SUCCESS = 'COUNTRIES_SUCCESS'
export const COUNTRIES_FAILURE = 'COUNTRIES_FAILURE'

export const COUNTRY_NAME_SUCCESS = 'COUNTRY_NAME_SUCCESS'
export const COUNTRY_NAME_FAILURE = 'COUNTRY_NAME_FAILURE'
export const COUNTRY_NAME_REQUEST = 'COUNTRY_NAME_REQUEST'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

// Enum
export enum DialogType {}
// SignIn = 'signIn',
// SignUp = 'signUp',
export type prodState = {
  product: ProductState
  ui: UiState
}

////////////////////////////////////
export type AppState = {
  countriesList: pageState
  cart: CountryAPI[]
}

export type countriesAction =
  | SuccessAction
  | FailureAction
  | RequestAction
  | CountryNameSuccessAction
  | CountryNameFailureAction
  | CountryNameRequestAction

export type SuccessAction = {
  type: typeof COUNTRIES_SUCCESS
  payload: countryProp
}

export type RequestAction = {
  type: typeof COUNTRIES_REQUEST
}

export type FailureAction = {
  type: typeof COUNTRIES_FAILURE
  payload: {
    ErrorMessage: string
  }
}

export type CountryNameSuccessAction = {
  type: typeof COUNTRY_NAME_SUCCESS
  payload: countryProp
}

export type CountryNameRequestAction = {
  type: typeof COUNTRY_NAME_REQUEST
}

export type CountryNameFailureAction = {
  type: typeof COUNTRY_NAME_FAILURE
  payload: {
    ErrorMessage: string
  }
}

// JSON array data params
export type CountryAPI = {
  id: string
  name: {
    common: string
    official: string
  }
  flags: {
    svg: string
  }
  languages: {
    [key: string]: string
  }
  capital: string
  unMember: boolean
  population: number
  region: string
  borders: {
    [key: string]: string
  }
  favourites: boolean
}

export type countryProp = {
  country: CountryAPI
}

export type pageState = {
  countries: CountryAPI[] | null
  country: CountryAPI[]
  isLoaded: boolean
  isLoading: boolean
  isError: string
}

////////////////////////////////////

export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    // [key inDialogType]?: boolean
  }
}
