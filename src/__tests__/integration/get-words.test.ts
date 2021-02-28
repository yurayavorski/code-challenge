import { fetchWords } from '../../api/fetch-words'
import { getFrequentWords } from '../../utils/get-frequent-words'

describe('fetch words integration', () => {
    it('make api call to get words from sources and find 5 most popular', async (done) => {
        const result = await fetchWords()

        if (result) {
            const mostPopularWords = getFrequentWords(result)
            expect(mostPopularWords).toEqual(['sit', 'nec', 'vitae', 'at', 'amet'])
            done()
        } else {
            done.fail()
        }
    })
})
