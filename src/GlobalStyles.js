import { createGlobalStyle } from "styled-components";

/**
 * 전역 스타일 시트를 정의한 객체
 * @type {GlobalStyleComponent<{}, DefaultTheme>}
 */
const GlobalStyles = createGlobalStyle`
    * {
        font-family: ‘SUIT’, sans-serif;
    }
    
    body {
        margin: 0;
        padding: 0;
    }

    a{
        text-decoration: none;
        
    }
`;

export default GlobalStyles;