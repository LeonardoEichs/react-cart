import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --white: #fff;
        --gray-50: #f7f8fa;
        --gray-100: #eeeeee;
        --gray-200: #e4e4e4;
        --gray-500: #808080;
        --gray-800: #494d4b;
        --black-50: #292727;
        --black: #191818;
        --primary-500: #26468b;
        --primary-600: #224080;
        --primary-800: #192F5D;
        --second: #C4C4DE;
        --second-500: #8B8BB5;
        --third: #F5CB76;
        --success: #7DBF5D;
        --success-500: #72ad54;
        --danger: #D9534F;
        --danger-500: #be4844;
        --like: #be44aa;
    }

    body, #root {
        background: var(--gray-50);
        min-height: 100vh;
        max-width: 100vw;
        min-width: 320px
    }

    body,
    input,
    textarea,
    button {
    font: 500 1rem 'Mulish', Inter, sans-serif;
    color: var(--black);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    font-weight: 600;
    font-family: 'Mulish', Lexend, sans-serif;
    color: var(--black);
    }
`;

export default GlobalStyle;
