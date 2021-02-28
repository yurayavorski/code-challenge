import { LabelDraggerState } from './words-state'
import { LabelDraggerActionTypes, TypeKeys } from './words-actions'

const initialState: LabelDraggerState = {
    words: [],
    isLoading: false
}

export function labelDraggerReducer(
    state: LabelDraggerState = initialState,
    action: LabelDraggerActionTypes
): LabelDraggerState {
    switch (action.type) {
        case TypeKeys.SET_WORDS:
            return { ...state, words: action.payload.words }
        case TypeKeys.SET_LOADING:
            return { ...state, isLoading: action.payload.isLoading }
        case TypeKeys.SET_ERROR:
            return { ...state, error: action.payload.error }
        default:
            return state
    }
}
