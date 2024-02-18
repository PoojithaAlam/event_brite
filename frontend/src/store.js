import { configureStore, combineReducers} from '@reduxjs/toolkit'
import { eventListReducer, eventDetailsReducer } from './reducers/eventReducers'
import {cartReducer} from './reducers/cartReducers'
 

const rootReducer = combineReducers ({
  eventList: eventListReducer,
  eventDetails: eventDetailsReducer,
  cart: cartReducer
  
})

const cartItemsFromStorage =localStorage.getItem('cartItems') 
  ? JSON.parse(localStorage.getItem('cartItems')) 
  :[]

const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : {}

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}



 const initialState = {
  cart : {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage
  }
  
 }

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState
})

export default store