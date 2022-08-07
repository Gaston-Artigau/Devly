import styled from 'styled-components'

export const FooterTemplate = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 15px 50px;
    
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    a {
        gap: 10px;
        width: 140px;
        color: #e3e3e3;
        font-weight: 600;
        font-size: 14.5px;

        &:hover {
            text-shadow: 0.3px 0.3px 1px #e3e3e3;
        }
    }
    
    p {
        font-size: 15px;
    }

    span {
        color: #e3e3e3;
        font-weight: 400;
        font-size: 14.5px;
        text-shadow: none;

        &:hover {
            text-decoration: underline;
            font-weight: 500;
        }
    }

    .div-contact {
        gap: 55px;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 15px;
    }

    @media (max-width: 342px) {
        .div-contact {
            flex-direction: column !important;
            gap: 10px;
        }
    }
`

export const FooterLinks = styled.div`
    align-items: center;

    ul {
        display: flex;
        gap: 15px;
    }

    ul li {
        padding: 10px;
        background-color: #222225;
        border-radius: 10px;
        border: 1px solid #2b2e3c;
        transition: .4s;

        &:hover {
        border: 1px solid #7a66c7;
    }
    }

    @media (max-width: 768px) {
        h4 {
            visibility: hidden;
        }
    }

    @media (max-width: 415px) {
        ul {
            padding: 0;
        }
    }

    @media (max-width: 320px) {
        ul {
            flex-wrap: wrap;
        }
    }
`