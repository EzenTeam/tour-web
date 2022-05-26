import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: teal;
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <h2>Footer</h2>
        </FooterContainer>
    );
};

export default Footer;