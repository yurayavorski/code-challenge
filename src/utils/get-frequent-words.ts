const DEFAULT_MOST_POPULAR_WORDS_COUNT = 5

export const getFrequentWords = (words: string[], count: number = DEFAULT_MOST_POPULAR_WORDS_COUNT): string[] => {
    const wordsFrequencies: Record<string, number> = {}
    words.forEach((x: string) => {
        wordsFrequencies[x] = wordsFrequencies[x] === undefined ? 0 : wordsFrequencies[x] + 1
    })
    return Object.keys(wordsFrequencies)
        .map((x) => ({ word: x, freq: wordsFrequencies[x] }))
        .sort((a, b) => b.freq - a.freq)
        .slice(0, count)
        .map((x) => x.word)
}
