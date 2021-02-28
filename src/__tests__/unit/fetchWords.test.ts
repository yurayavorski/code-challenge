jest.mock('../../api/fetch-data', () => ({
    fetchData: jest.fn().mockImplementation(() => {
        return 'word'
    })
}))

import { fetchData } from '../../api/fetch-data'
import { fetchWords, sourceNames } from '../../api/fetch-words'

const fetchDataModule = {
    fetchData
}

describe('fetch words', () => {
    it('should join text from multiple sources and extract words array from it', async () => {
        const spyOnFetchData = jest.spyOn(fetchDataModule, 'fetchData')

        const result = await fetchWords()

        expect(result?.length).toBeGreaterThan(0)
        expect(spyOnFetchData).toHaveBeenCalledTimes(sourceNames.length)
    })
})
