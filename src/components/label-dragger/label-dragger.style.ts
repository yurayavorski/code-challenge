import styled from 'styled-components'
import { white } from '../../styles/colors'

export const DraggableItem = styled.div`
    position: absolute;
    display: inline-block;
    font-size: 42px;
    text-align: center;
    transition: color 0.3s;
    & label {
        border-radius: 5px;
        cursor: move;
        padding: 3px;
        transition: background 0.3s;
    }

    & > span {
        background: ${white};
        color: #000;
        font-size: 14px;
        padding: 5px;
        border-radius: 5px;
        display: block;
        position: absolute;
        text-align: center;
        width: 50px;
        top: 115%;
        left: 50%;
        margin-left: -30px;
        transition: 0.5s;
        & span {
            text-align: left;
            display: inline-block;
        }

        &:before {
            content: '';
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-bottom: 8px solid ${white};
            position: absolute;
            top: -8px;
            left: 38%;
        }

        &.hidden {
            opacity: 0;
            visibility: hidden;
        }
    }
`
