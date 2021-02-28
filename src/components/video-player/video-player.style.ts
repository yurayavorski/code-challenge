import styled from 'styled-components'
import { videoControlsHeight } from '../../styles/spacings'

export const VideoWrapper = styled.div`
    & .video-react-fluid.video-react {
        padding-top: 0 !important;
        height: 100vh;

        & .video-react-big-play-button {
            display: none;
        }

        & .video-react-play-control {
            margin-left: 8px;
        }
        & .video-react-control-bar {
            height: ${videoControlsHeight};
            align-items: center;
            & .video-react-control {
                height: 30px;
            }
        }
    }
`
