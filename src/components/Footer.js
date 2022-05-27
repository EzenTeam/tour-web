import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 100%;
    height: 100px;
    color: #fff;
    background-color: teal;
    text-align: center;

    h2 {
        padding-top: 30px;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <h2>Footer</h2>
        </FooterContainer>
    );
};

export default Footer;