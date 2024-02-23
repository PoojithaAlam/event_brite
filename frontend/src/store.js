import { configureStore, combineReducers} from '@reduxjs/toolkit'
import { eventListReducer, eventDetailsReducer } from './reducers/eventReducers'
import {cartReducer} from './reducers/cartReducers'
import { userLoginReducer, userDetailsReducer, 
  userUpdateProfileReducer,userRegisterReducer  } from './reducers/userReducers'
 

const rootReducer = combineReducers ({
  eventList: eventListReducer,
  eventDetails: eventDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  
  
})

 const cartItemsFromStorage =localStorage.getItem('cartItems') ? 
 JSON.parse(localStorage.getItem('cartItems')) :[]

 const userInfoFromStorage = localStorage.getItem('userInfo') ? 
 JSON.parse(localStorage.getItem('userInfo')) : null

 const paymentMethodFromStrorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : {}

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

 const initialState = {
  cart: { cartItems:cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStrorage },
  userLogin: { userInfo: userInfoFromStorage }
 }

 

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState
})

export default store