import React, { useState } from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { getNextColor, LabelDragger } from '../../components/label-dragger/label-dragger'
import { ItemColors, ItemPosition, ItemState } from '../../components/label-dragger/label-dragger-model'
import drag from './test-utls/drag'
import { act } from 'react-dom/test-utils'
import { sleep } from './test-utls/sleep'

const testWordsSet = ['word1', 'word2']

const initialColor = ItemColors.Red

const LabelDraggerWrapper = () => {
    const [itemStates, setItemStates] = useState<ItemState[] | undefined>(
        testWordsSet.map(() => ({
            color: initialColor,
            isRendered: true,
            position: { x: 0, y: 0 }
        }))
    )

    return <LabelDragger words={testWordsSet} itemStates={itemStates} setItemStates={setItemStates} />
}

describe('Label Dragger', () => {
    afterEach(cleanup)

    it('renders label draggers with words', async () => {
        const { getByText, asFragment } = render(<LabelDraggerWrapper />)

        const initialRender = asFragment()
        expect(initialRender).toMatchSnapshot()
        expect(getByText(testWordsSet[0])).toBeTruthy()
        expect(getByText(testWordsSet[1])).toBeTruthy()
    })

    it('changes color of label after its clicked', async () => {
        const { getByText, asFragment, queryByText } = render(<LabelDraggerWrapper />)

        fireEvent.click(getByText(testWordsSet[0]))
        expect(queryByText(testWordsSet[0])?.style.color).toEqual(getNextColor(initialColor))
        const RenderAfterColorChanged = asFragment()
        expect(RenderAfterColorChanged).toMatchSnapshot()
    })

    it('changes position of element after its dragged', async () => {
        const { asFragment, queryByText } = render(<LabelDraggerWrapper />)

        const newItemPosition: ItemPosition = {
            x: 100,
            y: 100
        }

        await new Promise<void>((res) => {
            act(() => {
                drag(queryByText(testWordsSet[0]) as HTMLElement, {
                    to: newItemPosition,
                    delta: newItemPosition,
                    duration: 500,
                    steps: 20
                }).then(() => res())
            })
        })

        const RenderAfterDrag = asFragment()
        expect(RenderAfterDrag).toMatchSnapshot()
    })

    it('shows the tooltip after 2000ms hover', async () => {
        const { asFragment, queryByText } = render(<LabelDraggerWrapper />)

        act(() => {
            fireEvent.mouseOver(queryByText(testWordsSet[0]) as HTMLElement)
        })

        await sleep(2100)

        const RenderAfterHover = asFragment()
        expect(RenderAfterHover).toMatchSnapshot()
    })
})
