import {createStore, applyMiddleware, combineReducers } from 'redux'

//Use the combine reducers to manage all of our slices of state
const reducer = combineReducers({})



const configureStore = () => {
    return createStore(
        reducer
    )
}

export default configureStore
