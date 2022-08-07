import styled from 'styled-components'

export const Section1 = styled.section`
   
`

export const ChildSection2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    padding: 0 40px;
    margin-bottom: 70px;

    div {
        display: flex;
        flex-direction: column;
        gap: 60px;
    }

    article {
        padding: 25px;
        background-color: #2e2b38;
        box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%);

        h3 {
            font-size: 26px;
        }

        span {
            text-decoration: none;
        }

        p {
            font-size: 15px;
        }

        li {
            font-size: 15px;
        }
    }

    @media (max-width: 1000px) {
        padding: 0;
        gap: 30px;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;

        div {
            gap: 30px;
        }
    }
`

export const Article1Section2 = styled.article`
    border-top: 3px solid #7a66c7;
`

export const Article2Section2 = styled.article`
    border-top: 3px solid #ffc765;

    span {
        color: #ffc765;
    }
`

export const Article3Section2 = styled.article`
    border-top: 3px solid #ff6962;

    span {
        color: #ff6962;
    }
`