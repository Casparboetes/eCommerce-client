import { FETCHED_ALL_PRODUCTS } from '../actions/products'

export default function (state = [], action) {
  switch (action.type) {
    case FETCHED_ALL_PRODUCTS:
      return action.payload

    default:
      return state
  }
}

// Hardcoded products, should come from API now. :)
//
// const products = [
//   {
//     id: 1,
//     name: 'Handbag',
//     price: 1450
//   },
//   {
//     id: 2,
//     name: 'Fan',
//     price: 125
//   },
//   {
//     id: 5,
//     name: 'Heater',
//     price: 550
//   },
//   {
//     id: 7,
//     name: 'T-shirt',
//     price: 10
//   }
// ]
