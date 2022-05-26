import React from 'react';
import styled from 'styled-components';

const HeaderContainer= styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 300px;
    background-color: teal;
    text-align: center;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>Header</h1>
        </HeaderContainer>
    );
};

export default Header;