import { mockedServerResponse } from './test-utls/mocked-data'
jest.mock('../../api/fetch-data', () => Promise.resolve(mockedServerResponse))
jest.mock('../../components/sally/sally', () => 'mock') // mock component which contains image
jest.mock('../../components/video-player/video-player', () => 'mock') // mock video player

import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { LabelDraggerPlayer } from '../../components/label-dragger-player/label-dragger-player'
import { Provider } from 'react-redux'
import { configureStore } from '../../store/store'

const Asd = () => {
    return (
        <Provider store={configureStore()}>
            <LabelDraggerPlayer />
        </Provider>
    )
}

describe('Label Dragger', () => {
    afterEach(cleanup)

    it('renders label draggers with words', async () => {
        const { asFragment } = render(<Asd />)

        const initialRender = asFragment()
        expect(initialRender).toMatchSnapshot()
    })
})
