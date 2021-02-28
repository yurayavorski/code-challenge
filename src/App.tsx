import React from 'react'
import { Normalize } from 'styled-normalize'
import { Layout } from './ui/Layout/Layout'
import { GlobalStyle } from './ui/GlobalStyle'
import { LabelDraggerPlayer } from './components/label-dragger-player/label-dragger-player'

const App: React.FC = () => {
    return (
        <Layout>
            <Normalize />
            <GlobalStyle />

            <LabelDraggerPlayer />
        </Layout>
    )
}

export default App
