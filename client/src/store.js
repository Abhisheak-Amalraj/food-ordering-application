import {combineReducers} from 'redux'

import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {composeWithDevTools} from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducer'
import { loginUserReducer, registerUserReducer, getAllUsersReducer } from './reducers/userReducer'
import {placeOrderReducer, getUserOrdersReducer, getAllOrdersReducer} from './reducers/orderReducer'
import {addfoodReducer, getAllfoodsReducer, getfoodByIdReducer, editfoodReducer} from './reducers/foodReducers'

const finalReducer = combineReducers({
    getAllfoodsReducer : getAllfoodsReducer,
    cartReducer : cartReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer : loginUserReducer,
    placeOrderReducer : placeOrderReducer,
    getUserOrdersReducer : getUserOrdersReducer,
    addfoodReducer : addfoodReducer,
    getfoodByIdReducer : getfoodByIdReducer,
    editfoodReducer : editfoodReducer,
    getAllfoodsReducer : getAllfoodsReducer,
    getAllOrdersReducer : getAllOrdersReducer,
    getAllUsersReducer : getAllUsersReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

const initialState = {
    cartReducer: {
        cartItems: cartItems
    },
    loginUserReducer:{
        currentUser: currentUser
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)) )

export default store