import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    body::-webkit-scrollbar {
        width: 10px;
    }
    body::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background-color: #c7c7c7;
    }
    body::-webkit-scrollbar-thumb:hover {
        background: #252528;
    }
    body::-webkit-scrollbar-thumb:active {
        background-color: #7a66c7;
    }

    p::selection, h1::selection, h2::selection, h3::selection, h4::selection, h5::selection, a::selection, span::selection, div::selection, input::selection, textarea::selection {
        color: #fff;
        background-color: #282836;
    }
    span::selection, button::selection, li::selection {
        color: #f59794;
    }
    h1::selection, h2::selection, b::selection {
        color: #7a66c7;
    }
    img::selection {
        background-color: #433da7;
    }

    html {
        background-color: #181819;
        color: #c7c7c7;
        font-family: sans-serif;
    }
    main {
        padding: 0 30px;
    }
    h1 {
        font-size: 45px;
        font-family: monospace;
        font-weight: 500;
    }
    h2 {
        font-size: 32px;
        margin-top: 5px;
        font-family: monospace;
        font-weight: 500;
    }
    h3 {
        font-size: 18px;
        margin-top: 5px;
        font-family: monospace;
        font-weight: 500;
    }
    a {
        text-decoration: none;
        color: #c7c7c7;
    }
    p {
        margin: 0;
        font-size: 20px;
    }
    span {
        text-shadow: none;
        color: #7a66c7;
        text-decoration: underline;
    }
    li {
        list-style: none;
    }

    .actived-nav {
        display: flex;
        flex-direction: column;
        justify-content: initial;
        height: 100vh;
        width: 100vw;
        gap: 40px;
        padding-top: 10vh;
        position: fixed;
        z-index: 10;
        transform: translate3d(0px, 00%, 0px);
        transition: transform 0.5s cubic-bezier(0.05, 1.04, 0.72, 0.98) 0s;

        &:active {
            transform: translate3d(0px, 0px, 0px);
        }
    }

    .actived {
        display: flex;
        flex-direction: column;
        justify-content: initial;
        align-items: center;
        font-size: 16px;
        height: 100vh;
        width: 100vw;
        top: 30vh;
        gap: 40px;
        padding: 20px;
        position: fixed;
        z-index: 10;
        transform: translate3d(0px, 00%, 0px);
        transition: transform 0.5s cubic-bezier(0.05, 1.04, 0.72, 0.98) 0s;

        &:active {
            transform: translate3d(0px, 0px, 0px);
        }
    }

    .open {
        padding-right: 50px;

        .-top{
            -webkit-transform:translateY(200%) rotate(45deg) !important;
            -ms-transform:translateY(200%) rotate(45deg) !important;
            transform:translateY(200%) rotate(45deg) !important;
        }
        .-mid{
            opacity:0;
        }
        .-bottom{
            -webkit-transform:translateY(-200%) rotate(135deg) !important;
            -ms-transform:translateY(-200%) rotate(135deg) !important;
            transform:translateY(-200%) rotate(135deg) !important;
        }
    }

    @media (max-width: 480px) {
        main {
            padding: 0 10px;
        }

        h1 {
            font-size: 35px;
        }
    }
`

export const Section2 = styled.section`
    background-color: #222225;
    border-radius: 5px;
    padding: 50px;
    margin-bottom: 100px;

    @media (max-width: 720px) {
        h2 {
            font-size: 28px;
        }
        p {
            font-size: 18px;
        }

        padding: 30px;
    }

    @media (max-width: 1000px) {
        padding: 50px 30px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }

    @media (max-width: 340px) {
        padding: 5px;
    }
`

export const Child2Section2 = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    gap: 40px;
    margin-bottom: 50px;

    p {
        font-size: 24px; 
        position: absolute;
        transform: rotate(-90deg);
        float: left;
        transform-origin: left 0;
        top: 80%;
        display: block;
    }

    span {
        text-shadow: 1.3px 2.4px 1px #7a66c7;
        color: #c7c7c7;
        text-decoration: none;
    }

    p::after {
        content: "";
        height: 1px;
        width: 100%;
        background-color: #7a66c7;
        display: block;
        position: absolute;
        margin-top: 3px;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-left: 40px;
        gap: 20px;
    }

    ul li {
        list-style: none;
        display: flex;
    }

    ul li p {
        transform: none;
        position: initial;
        font-size: 16px;
        margin-top: 0;
    }

    ul li p::after {
        display: none;
    }

    ul li h3 {
        position: relative;
        display: inline-block;
    }

    ul li h3::after {
        content: "";
        height: 1px;
        width: 100%;
        background-color: #7a66c7;
        display: block;
        position: absolute;
        margin-top: 3px;
    }

    @media (max-width: 870px) {
       p {
        visibility: hidden;
       }

       ul li p {
        visibility: visible;
       }

       ul {
        margin-left: 0;
        padding-left: 0;
       }
    }

    @media (max-width: 	750px) {
        ul {
            display: flex;
            flex-direction: column;
        }
    }
`