import styled from 'styled-components'

export const SallyWrapper = styled.div`
    position: absolute;
    bottom: -60px;
    left: -20px;

    & img {
        height: 280px;
    }

    @media screen and (max-height: 700px) {
        display: none;
    }

    & span {
        color: #fff;
        padding: 10px;
        border-radius: 20px;
        background: #9486f3;
        margin-left: 75px;
        display: inline-block;
        width: 46%;
    }
`
