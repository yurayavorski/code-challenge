import React, { useState } from 'react'
import { ItemState } from './label-dragger-model'
import Draggable, { DraggableData } from 'react-draggable'
import { DraggableItem } from './label-dragger.style'

export type OnDrag = (newPosition: DraggableData) => void

export interface LabelDraggerItemProps {
    itemState?: ItemState
    onDrag: OnDrag
    onStop: () => void
    onClick: () => void
    children: React.ReactNode
}

const HOVER_TIME = 2000

export const LabelDraggerItem = ({ itemState, onClick, onStop, onDrag, children }: LabelDraggerItemProps) => {
    const [showCoordinates, setShowCoordinates] = useState<boolean>(false)
    let timerId: number

    const onMouseOver = () => {
        timerId = setTimeout(() => setShowCoordinates(true), HOVER_TIME)
    }

    const interruptHover = () => {
        if (timerId) {
            clearTimeout(timerId)
        }
        setShowCoordinates(false)
    }

    return (
        <Draggable
            axis='both'
            handle='.handle'
            bounds='parent'
            defaultPosition={itemState?.position}
            position={itemState?.position}
            onDrag={(_, newPosition) => {
                interruptHover()
                onDrag(newPosition)
            }}
            onStop={onStop}
            grid={[1, 1]}
            scale={1}
        >
            <DraggableItem>
                <label
                    className='handle'
                    onClick={() => {
                        interruptHover()
                        onClick()
                    }}
                    onMouseOver={onMouseOver}
                    onMouseLeave={interruptHover}
                    style={{ color: itemState?.color }}
                >
                    {children}
                </label>
                <span className={!showCoordinates ? 'hidden' : ''}>
                    <span>
                        {`x: ${itemState?.position?.x}`}
                        <br />
                        {`y: ${itemState?.position?.y}`}
                    </span>
                </span>
            </DraggableItem>
        </Draggable>
    )
}
