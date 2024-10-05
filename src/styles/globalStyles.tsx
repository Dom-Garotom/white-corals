import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'Anton';
      src: url('/fonts/Anton-regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }

    *{
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        font-family: Poppin , sans-serif;
    }

    :root{
        font-size: 16px;
    }

    body{
        background-color: #F5F5F5;
    }

    h2, h1{
        font-family: "Anton" , sans-serif;
    }


` 