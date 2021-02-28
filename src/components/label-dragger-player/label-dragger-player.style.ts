import styled from 'styled-components';
import { white } from '../../styles/colors';
import { leftMenuOverlap, videoControlsHeight } from '../../styles/spacings';


export const LabelDraggerPlayerWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;

    & > section:first-child {
        width: 200px;
        text-align: center;
        z-index: 2

        & > div {
            width: calc(100% + ${leftMenuOverlap}); /* offset for left menu to overlap on player*/
            background: ${white};
            border-radius: 10px;
            height: 100vh;
            padding: 0 10px 10px 20px;
            box-sizing: border-box;
            position: relative;
        }

        & h3 {
            margin-top: 0;
            padding-top: 20px;
            text-align: left;
            font-size: 22px;
        }
    }
    & > section:last-child {
        position: relative;
        height: 100vh;
        flex: 1;
        z-index: 1;
        overflow: hidden;
    }
`;

export const LabelDraggerWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: calc(100% - ${leftMenuOverlap}); /* 9px left menu overlap */
    margin-left: ${leftMenuOverlap};
    height: calc(100% - ${videoControlsHeight});
`;