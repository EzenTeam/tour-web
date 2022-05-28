import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MainContainer = styled.div`
    .item-wrap{
        margin: 50px auto 0;
        width: 90%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        align-items: center;

        .item{
            width: 400px;
            height: 550px;
            margin-bottom: 50px;
            background-color: teal;

            img{
                width: 100%;
                height: 70%;
            }
            .text{
                height: 30%;
                color: #fff;
                text-align: center;
                line-height: 3;
            }
        }
    }
`;

const Main = () => {
    return (
        <MainContainer>
            <div className="item-wrap">
                <div className="item">
                    <NavLink to='/travel'>
                        <img src="http://via.placeholder.com/500?text=sample" alt="sample" />
                        <div className="text">
                            국내 관광지 100선
                        </div>
                    </NavLink>
                </div>
                <div className="item">
                    <NavLink to='/pettravel'>
                        <img src="http://via.placeholder.com/500?text=sample" alt="sample" />
                        <div className="text">
                            강원도 반려동물 동반 관광지
                        </div>
                    </NavLink>
                </div>
                <div className="item">
                    <NavLink to='/loadtour'>
                        <img src="http://via.placeholder.com/500?text=sample" alt="sample" />
                        <div className="text">
                            로드투어 두루누비
                        </div>
                    </NavLink>
                </div>
            </div>
        </MainContainer>
    );
};

export default Main;