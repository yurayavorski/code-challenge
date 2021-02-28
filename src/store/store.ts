import { combineReducers, createStore } from 'redux'
import { labelDraggerReducer } from '../components/label-dragger-player/words-reducer'
import { RootState } from './RootState'

// -- import-generated-reducers --

const rootReducer = combineReducers({
    labelDragger: labelDraggerReducer

    // -- generated-reducers --
})

export function configureStore() {
    const rootState: Partial<RootState> = {
        labelDragger: {
            words: [],
            isLoading: false
        }
    }

    return createStore(rootReducer, rootState)
}
