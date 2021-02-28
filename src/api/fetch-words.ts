import { fetchData } from './fetch-data'

const SOURCE_URL = 'https://frontend-coding-challenge.s3.amazonaws.com/'

export const sourceNames = ['1.txt', '2.txt', '3.txt']

const extractWordsRegexp = /("[^"]+"|[^"\s]+)/g

export const fetchWords = async (): Promise<string[] | null> => {
    const wordsSets = await Promise.all(sourceNames.map((x) => fetchData<string>(SOURCE_URL + x)))
    return wordsSets.join(' ').match(extractWordsRegexp)
}
