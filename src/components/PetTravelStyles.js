import styled from "styled-components";

const PetTravelStyles = styled.div`
    width: 80%;
    margin: 50px auto;

    h2 {
        text-align: center;
    }

    .select-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 10px;
    }

    /* 라이브러리 css 변경사항 */
    .MuiFormLabel-root.Mui-focused {
        color: teal;
        font-weight: bold;
    }

    .MuiInput-underline:after {
        border-bottom-color: teal;
    }
`;

export default PetTravelStyles;