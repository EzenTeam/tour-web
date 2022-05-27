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

const Selects = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;

    span {
        margin: 0 5px;
    }
`;

const PetTravel = memo(()=>{
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state)=>state.pettravel);
    const [partCode, setPartCode] = React.useState('PC03');
    const [pageBlock, setPageBlock] = React.useState(10);

    React.useEffect(() => {
        dispatch(getPetTravel({
            partCode: partCode,
            page: 1,
            pageBlock: pageBlock,
        }))
    },[dispatch, partCode, pageBlock])

    const onChange = React.useCallback(e => {
        e.preventDefault();
        e.target.name === 'partCode' ? (
            setPartCode(e.target.value)
        ) : (
            setPageBlock(e.target.value)
        );
    }, []);

    return(
        <>
            <Spinner visible={loading}/>
            {error ? (
                <ErrorView error={error} />
            ) : data && (
                <PetTravelContainer>  
                    <h2>강원도 반려동물 동반 관광지 리스트</h2>
                    <Selects>
                        <span>카테고리</span>
                        <select name='partCode' onChange={onChange}>
                            <option value='PC03'>관광지</option>
                            <option value='PC02'>숙박</option>
                            <option value='PC01'>식음료</option>
                            <option value='PC04'>체험</option>
                            <option value='PC05'>동물병원</option>
                        </select>
                        <span>게시물 개수</span>
                        <select name='pageBlock' onChange={onChange}>
                            {[...new Array(5)].map((v, i) => {
                                return <option key={i} value={(i+1)*10}>{(i+1)*10}개</option>
                            })}
                        </select>
                    </Selects>
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