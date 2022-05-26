import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MainContainer = styled.div`
    position: relative;
    top: 300px;

    .item-wrap{
        margin: 50px auto;
        width: 80%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;

        .item{
            width: 400px;
            height: 550px;
            background-color: teal;

            img{
                background-color: yellowgreen;
                display: block;
                height: 70%;
            }
            .text{
                height: 30%;
            }
        }
    }
`;

const Main = () => {
    return (
        <MainContainer>
            <div className="item-wrap">
                <div className="item">
                    <NavLink to=''>
                        <img src="" alt="" />
                        <div className="text">
                            전체관광
                        </div>
                    </NavLink>
                </div>
                <div className="item">
                    <NavLink to='/pettravel'>
                        <img src="" alt="" />
                        <div className="text">
                            반려동물동반
                        </div>
                    </NavLink>
                </div>
                <div className="item">
                    <NavLink to='/loadtour'>
                        <img src="" alt="" />
                        <div className="text">
                            길여행_두루누비
                        </div>
                    </NavLink>
                </div>
            </div>
        </MainContainer>
    );
};

export default Main;