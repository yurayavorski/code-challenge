import React from 'react'
import { WordControl } from './words-control.style'

export interface WordsControlsProps {
    words: string[]
    onClick: (index: number) => void
}

export const WordsControls = ({ words, onClick }: WordsControlsProps) => {
    return (
        <section>
            {words.length &&
                words.map((x, index) => (
                    <WordControl key={index} onClick={() => onClick(index)}>
                        {x}
                    </WordControl>
                ))}
        </section>
    )
}
