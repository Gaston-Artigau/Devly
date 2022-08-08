import styled from 'styled-components'
import { Link, animateScroll as scroll } from "react-scroll";

export const es = scroll

export const Nav = styled.nav`
    background-color: #181819;
    height: 90px;
    padding: 0 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #fff;
    align-items: center;
    margin-bottom: 50px;

    @media (max-width: 650px) {
        padding: 0 10px;
    }
`

export const NavLinks = styled.div`

    display: flex;
    flex-direction: row;
    gap: 25px;
    align-items: center;
    text-align: center;
    font-size: 14px;

    a:hover {
        color: #fff;
    }

    @media (max-width: 560px) {
        display: none;
    }

`

export const NavBtn = styled(Link)`
    color: #fff;
    background-color: #7a66c7;
    padding: 7px 12px;
    border-radius: 5px;
    font-weight: bold;
    transition: all .3s ease-in-out;

    p {
        font-size: 14px;
    }

    &:hover {
        background-color: #7a66c7d6;
    }
`

export const Hamburger = styled.div`
    display: none;
    position: fixed;
    background-color: transparent;
    right: 0;
    top: 0;
    height: 30px;
    width: 30px;
    padding: 20px 20px;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    -webkit-transition:-webkit-transform 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
    transition:transform 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
    z-index: 1002;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #fff;

    div {
        background:#777777;
        margin-bottom:4px;
        border-radius:2px;
        width:28px;
        height:4px;
        opacity:1;
        -webkit-transform:translate3d(0, 0, 0);
        transform:translate3d(0, 0, 0);
        -webkit-transition:all 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
        transition:all 0.25s cubic-bezier(0.05, 1.04, 0.72, 0.98);
    }

    @media (max-width: 560px) {
        display: block;
    }
`