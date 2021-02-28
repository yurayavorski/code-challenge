import React, { useEffect, useState } from 'react'
import { LabelDragger } from '../label-dragger/label-dragger'
import { ItemColors, ItemPosition, ItemState } from '../label-dragger/label-dragger-model'
import { useWords } from './use-words'
import { WordsControls } from '../words-control/words-controls'
import { Sally } from '../sally/sally'
import { VideoPlayer } from '../video-player/video-player'
import { LabelDraggerPlayerWrapper, LabelDraggerWrapper } from './label-dragger-player.style'
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/BounceLoader'

const getInitialPosition = (index: number): ItemPosition => {
    const DEFAULT_ITEM_INDENT = 80
    return {
        x: DEFAULT_ITEM_INDENT,
        y: (index + 1) * DEFAULT_ITEM_INDENT
    }
}

export const LabelDraggerPlayer = () => {
    const { words, isLoading } = useWords()
    const [itemStates, setItemStates] = useState<ItemState[]>()

    useEffect(() => {
        setItemStates(
            words.map((_, index) => ({
                isRendered: false,
                position: getInitialPosition(index),
                color: ItemColors.Red
            }))
        )
    }, [words])

    const onWordControlClicked = (index: number) => {
        if (itemStates) {
            const newState = [...itemStates]
            newState[index].isRendered = !newState[index].isRendered
            setItemStates(newState)
        }
    }

    return (
        <LoadingOverlay active={isLoading} spinner={<BounceLoader />} text='Player is loading...'>
            <LabelDraggerPlayerWrapper>
                <section>
                    <div>
                        <h3>
                            Welcome to <br /> Label-Dragger Player &#128075;
                        </h3>
                        <WordsControls words={words} onClick={onWordControlClicked} />
                        <Sally />
                    </div>
                </section>

                <section>
                    <VideoPlayer />

                    {words.length > 0 && itemStates && itemStates.length > 0 && (
                        <LabelDraggerWrapper>
                            <LabelDragger words={words} itemStates={itemStates} setItemStates={setItemStates} />
                        </LabelDraggerWrapper>
                    )}
                </section>
            </LabelDraggerPlayerWrapper>
        </LoadingOverlay>
    )
}
