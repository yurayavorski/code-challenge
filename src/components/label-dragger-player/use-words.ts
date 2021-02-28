import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/RootState'
import { LabelDraggerState } from './words-state'
import { setErrorAction, setLoadingAction, setWordsAction } from './words-actions'
import { fetchWords } from '../../api/fetch-words'
import { getFrequentWords } from '../../utils/get-frequent-words'

interface UseTodoProps {
    words: string[]
    isLoading: boolean
    error?: Error
}

export const useWords = (): UseTodoProps => {
    const dispatch = useDispatch()

    const { words, isLoading, error }: LabelDraggerState = useSelector((state: RootState) => state.labelDragger)
    const setWords = useCallback((words: string[]) => dispatch(setWordsAction(words)), [dispatch])
    const setIsLoading = useCallback((isLoading: boolean) => dispatch(setLoadingAction(isLoading)), [dispatch])
    const setError = useCallback((error: Error) => dispatch(setErrorAction(error)), [dispatch])

    useEffect(() => {
        const getWords = async () => {
            try {
                setIsLoading(true)
                const words = await fetchWords()
                if (!words) {
                    throw new Error('No words were fetched from server')
                }
                const mostFrequentWords = getFrequentWords(words)
                setWords(mostFrequentWords)
                setIsLoading(false)
            } catch (error) {
                setError(error)
            }
        }

        getWords()
    }, [setWords, setError, setIsLoading])

    return { words, isLoading, error }
}
