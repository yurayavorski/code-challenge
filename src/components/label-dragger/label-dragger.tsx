import React, { useState } from 'react'
import { DraggableData } from 'react-draggable'
import { ItemColors, ItemState } from './label-dragger-model'
import { LabelDraggerItem, OnDrag } from './label-dragget-item'

export interface LabelDraggerProps {
    words: string[]
    itemStates?: ItemState[]
    setItemStates: React.Dispatch<React.SetStateAction<ItemState[] | undefined>>
}

export const getNextColor = (currentColor: ItemColors): ItemColors => {
    const colors = Object.values(ItemColors)
    const nextColorIndex = (colors.findIndex((x) => x === currentColor) + 1) % colors.length
    return colors[nextColorIndex]
}

export const LabelDragger = ({ words, itemStates, setItemStates }: LabelDraggerProps) => {
    const [isInDragState, setIsInDragState] = useState<boolean>(false)

    const onDrag = (index: number): OnDrag => (newPosition: DraggableData) => {
        setIsInDragState(true)
        const newItemStates = itemStates && [...itemStates]
        const itemPosition = newItemStates?.[index]?.position

        if (itemPosition) {
            itemPosition.x = newPosition.x
            itemPosition.y = newPosition.y

            setItemStates(newItemStates)
        }
    }

    const onStop = () => {
        setTimeout(() => setIsInDragState(false)) // Make sure onStop event is fired after the click event
    }

    const onItemClick = (index: number): void => {
        if (isInDragState) {
            return
        }

        const currentColor = itemStates?.[index].color
        if (itemStates && currentColor) {
            const nextColor = getNextColor(currentColor)
            const newState = [...itemStates]
            newState[index].color = nextColor

            setItemStates(newState)
        }
    }

    return (
        <>
            {words.length &&
                words.map(
                    (x, index) =>
                        itemStates &&
                        itemStates[index].isRendered && (
                            <LabelDraggerItem
                                key={index}
                                itemState={itemStates?.[index]}
                                onDrag={onDrag(index)}
                                onStop={onStop}
                                onClick={() => onItemClick(index)}
                            >
                                {x}
                            </LabelDraggerItem>
                        )
                )}
        </>
    )
}
