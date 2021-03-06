import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
// import { AppState } from '../types'

const initalState: any = {
  countriesList: {
    countries: null,
    country: null,
    isLoaded: false,
    isLoading: false,
    isError: '',
  },
  cart: [],
}

const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
