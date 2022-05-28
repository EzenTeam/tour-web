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

    .data-table {
        width: 100%;

        .list-title {
            background: teal;
            color: #fff;

            tr {
                th {
                    padding: 10px 0;
                }
            }
        }

        .list-item {
            tr {
                td {
                    text-align: center;
                    padding: 10px 0;
                    border-bottom: 1px solid #eee;
                    border-right: 1px solid #eee;

                    &:last-child {
                        border-right: 0;
                    }
                }
            }
        }
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