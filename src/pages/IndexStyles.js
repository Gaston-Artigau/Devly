import styled from 'styled-components'

export const Section1 = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 70px;

    @media (max-width: 870px) {
        grid-template-columns: 70% 30%;
    }

    @media (max-width: 670px) {
        grid-template-columns: 100% 0;

        h1 {
            font-size: 35px;
        }

        p {
            font-size: 18px;
        }
    }
`

export const ChildSection2 = styled.div`
    display: grid;
    grid-template-columns: 2fr 1.4fr;
    margin-bottom: 70px;

    @media (max-width: 870px) {
        display: flex;
        flex-direction: column;
        gap: 15px;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        img {
            width: 80% !important;
        }
    }

    @media (max-width: 480px) {
        img {
            width: 100% !important;
        }
    }

    @media (max-width: 240px) {
        h2 {
            word-break: break-all;
        }
    }
`