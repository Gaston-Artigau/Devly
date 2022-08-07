import styled from 'styled-components'

export const Section1 = styled.section`

`

export const ChildSection2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 70px;
    padding: 0 50px;

    span {
        text-decoration: none;
    }

    @media (max-width: 1200px) {
        img {
            width: 70% !important;
        }
    }

    @media (max-width: 1000px) {
        grid-template-columns: 100% 0%;
        padding: 0;

        img {
            visibility: hidden;
        }
    }
`

export const Child2Section2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 50px;
    gap: 50px;

    ul {
        padding: 0;
    }

    li {
        margin-bottom: 30px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    p {
        font-size: 16px;
    }

    h3 {
        transition: all .5s;
    }

    a img{
        transition: all .3s;
    }
    
    a img:hover {
        width: 99.5%;
    }

    a h3:hover {
        font-size: 18.3px;
    }

    @media (max-width: 1000px) {
        padding: 0;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 0;

        h2 {
            visibility: hidden;
        }

        ul {
            margin-top: 0;
            margin-bottom: 0;
        }
    }
`