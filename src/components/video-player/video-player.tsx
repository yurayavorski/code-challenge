import React from 'react'
import { ControlBar, Player } from 'video-react'
import '../../../node_modules/video-react/dist/video-react.css'
import { VideoWrapper } from './video-player.style'

export const VideoPlayer = () => {
    return (
        <VideoWrapper>
            <Player autoPlay muted playsInline height={100}>
                <source src='https://frontend-coding-challenge.s3.amazonaws.com/moonwalker.mp4' />
                <ControlBar autoHide={false} />
            </Player>
        </VideoWrapper>
    )
}
