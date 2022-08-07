import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: 230px 220px 120px 220px;
    gap: 100px;
    font-family: sans-serif;
    letter-spacing: .2px;
    line-height: 28px;

    span {
        text-decoration: none;
        color: #a0a0a0;
        font-size: 17px;
    }

    p {
        margin: 20px 0;
    }

    h1 {
        margin-bottom: 30px;
        font-weight: bold;
        font-size: 64px;
        line-height: 60px;
    }

    @media (max-width: 1100px) {
        padding: 230px 120px 120px 120px;
    }

    @media (max-width: 940px) {
        padding: 230px 80px 120px 80px;
    }

    @media (max-width: 768px) {
        padding: 230px 40px 120px 40px;
    }

    @media (max-width: 480px) {
        padding: 230px 15px 120px 15px;

        h1 {
            font-size: 52px;
        }
    }
`

export const ChildSection = styled.div`
    p {
        margin-bottom: 24px;
        font-size: 16px;
    }
`

export const Child2Section = styled.div`
    h2, h3 {
        color: #e0e0e0;
        font-weight: bold;
        font-size: 24px;
    }

    h3 {
        margin-top: 70px;
    }

    h4 {
        color: #e0e0e0;
        font-weight: bold;
        font-size: 24px;
        font-family: monospace;
    }

    p {
        margin-bottom: 24px;
        letter-spacing: .2px;
        font-size: 17px;
        color: #a0a0a0;
    }

    li {
        list-style: square;
        margin-bottom: 5px;
    }

    a {
        text-decoration: underline;
    }

    a:hover {
        text-decoration: none;
    }
`

export const Child3Section = styled.div`
    h2, h3 {
        color: #e0e0e0;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
    }

    h3 {
        margin-top: 70px;
    }

    p {
        margin-bottom: 24px;
        line-height: 32px;
        font-size: 16px;
        color: #a0a0a0;
    }

    h4 {
        font-weight: 400;
    }

    a {
        text-decoration: underline;
    }

    a:hover {
        text-decoration: none;
    }
`