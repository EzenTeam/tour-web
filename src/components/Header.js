import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderContainer= styled.div`
    width: 100%;
    height: 300px;
    color: #fff;
    background-color: teal;
    text-align: center;

    h1 {
        padding: 70px 0 20px 0;
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <h1>여행지 안내 사이트</h1>
            <NavLink to='/'>
                <img src="http://via.placeholder.com/100?text=logo" alt="sample-logo" />
            </NavLink>
        </HeaderContainer>
    );
};

export default Header;