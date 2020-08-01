import { combineReducers } from 'redux'

import heroes from './heroes'

const reducers = {
    heroes,
}

export default combineReducers(reducers)