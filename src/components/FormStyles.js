import styled from 'styled-components'

export const FormTemplate = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    width: 65%;
    margin: 0 auto;
    margin-bottom: 40px;
    border: 2px dashed #7a66c7;
    padding: 30px 30px;

    div h2 {
        font-size: 28px;
    }

    div span {
        text-shadow: 1.3px 2.4px 1px #7a66c7;
        color: #c7c7c7;
        text-decoration: none;
    }

    div p {
        font-size: 16px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        padding: 15px;
    }

    input, textarea {
        padding: 10px;
        background-color: #25252c;
        border: 1px solid #2b2e3c;
        border-radius: 5px;
        width: 100%;
        color: white;
        font-size: 15px;
        line-height: 22px;
        transition: .5s;
        resize: none;

        &:focus {
            border: 1px solid #7a66c7;
            outline: none;
        }
    }

    button {
        background-color: #7a66c7;
        font-weight: bold;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 6px;
        font-size: 14px;
        padding: 12px 8px;
        width: 80px;
        transition: all .4s ease-in-out;

        &:hover {
            background-color: #7a66c7d6;
        }
    }

    @media (max-width: 860px) {
        width: 90%;
    }

    @media (max-width: 680px) {
        display: flex;
        flex-direction: column;

        form {
            padding-left: 0;
        }
    }

    @media (max-width: 480px) {
        padding: 30px 20px 30px 10px;
    }

    @media (max-width: 340px) {
        border: none;
        padding: 30px 0;
    }
`