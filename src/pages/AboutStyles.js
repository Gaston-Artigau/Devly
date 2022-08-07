import styled from 'styled-components'

export const Section1 = styled.section`

`

export const ChildSection2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 70px;
    gap: 30px;

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;

        img {
            height: 100% !important;
            width: 100% !important;
        }
    }
`

export const Child2Section2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column-reverse;

        img {
            height: 100% !important;
            width: 100% !important;
        }
    }
`