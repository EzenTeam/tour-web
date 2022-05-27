import React, { memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getPetTravel } from '../slices/PetTravelSlice';

import styled from 'styled-components';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';

const PetTravelContainer = styled.div`
    width: 80%;
    margin: 50px auto;

    h2 {
        text-align: center;
        margin-bottom: 50px;
    }
`;

const Table = styled.table`
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
`;

const PetTravel = memo(()=>{
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state)=>state.pettravel);

    React.useEffect(() => {
        dispatch(getPetTravel({
            params: {
                partCode: 'PC01',
                page: 2,
                pageBlock: 10,
            }
        }))
    },[dispatch])

    return(
        <>
            <Spinner visible={loading}/>
            {error ? (
                <ErrorView error={error} />
            ) : data && (
                <PetTravelContainer>  
                    <h2>강원도 반려동물 동반 관광지 리스트</h2>
                    <Table>
                        <thead className='list-title'>
                            <tr>
                                <th>가게명</th>
                                <th>카테고리</th>
                                <th>지역</th>
                                <th>상세주소</th>
                                <th>전화번호</th>
                            </tr>
                        </thead>
                        <tbody className='list-item'>
                            {data[0].resultList.map((v, i) => {
                                return (
                                    <tr key={v.contentSeq}>
                                        <td>{v.title}</td>
                                        <td>{v.partName}</td>
                                        <td>{v.areaName}</td>
                                        <td>{v.address}</td>
                                        <td>{v.tel}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </PetTravelContainer>
            )}
        </>
    )
});

export default PetTravel;