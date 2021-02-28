import { LabelDraggerState } from './words-state'

export enum TypeKeys {
    SET_WORDS = 'SET_WORDS',
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR'
}

export interface SetWords {
    type: TypeKeys.SET_WORDS
    payload: LabelDraggerState
}

export interface SetLoading {
    type: TypeKeys.SET_LOADING
    payload: LabelDraggerState
}

export interface SetError {
    type: TypeKeys.SET_ERROR
    payload: LabelDraggerState
}

export type LabelDraggerActionTypes = SetWords | SetLoading | SetError

export const setWordsAction = (words: string[]) => ({ type: TypeKeys.SET_WORDS, payload: { words } })

export const setLoadingAction = (isLoading: boolean) => ({ type: TypeKeys.SET_LOADING, payload: { isLoading } })

export const setErrorAction = (error: Error) => ({ type: TypeKeys.SET_ERROR, payload: { error } })
