import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-family: "Roboto", sans-serif;
    }

    body {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        overflow: hidden;

    }

    h1 {
        color: #454545,
    }
    P {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;