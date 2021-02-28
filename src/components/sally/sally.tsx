import React from 'react'
import image from '../../assets/saly.png'
import { SallyWrapper } from './sally.style'

export const Sally = () => {
    return (
        <SallyWrapper>
            <span>Press the buttons above to add or remove a word on video</span>
            <img src={image} alt='sally' />
        </SallyWrapper>
    )
}
