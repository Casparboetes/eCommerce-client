import ApiClient from '../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from './loading'

export const FETCHED_DETAILED_PRODUCT = 'FETCHED_DETAILED_PRODUCT'
export const FETCHED_ALL_PRODUCTS = 'FETCHED_ALL_PRODUCTS'

const api = new ApiClient()

export const fetchAllProducts = () => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })
    api.get('/products')
      .then((res) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: FETCHED_ALL_PRODUCTS,
          payload: res.body
        })
      })
      .catch((err) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({
              type: LOAD_ERROR,
              payload: err.message
            })
          })
  }
}

export const fetchProduct = (productId) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })
    api.get(`/products/${productId}`)
      .then((res) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: FETCHED_DETAILED_PRODUCT,
          payload: res.body
        })
      })
      .catch((err) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({
              type: LOAD_ERROR,
              payload: err.message
            })
          })
  }
}
