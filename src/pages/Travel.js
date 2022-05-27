import React, { memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { TravelList } from '../slices/TravelSlice';

import Spinner from '../components/Spinner';
import Table from '../components/Table';
import ErrorView from '../components/ErrorView';

const Travel = memo(() => {
    // Redux Store로부터 Ajax관련 상태값 구독
    const { data, loading, error } = useSelector((state) => state.Travel);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(TravelList(({
        })));
    }, [dispatch]);

    return (
        <div>
            <Spinner visible={loading} />

            {error ? (
                <ErrorView error={error} />
            ) : (
                <>
                <h1>한국관광공사 국내 관광지 100선</h1>
                <Table>
                    <thead>
                        <tr>
                            <th>정보명</th>
                            <th>문의 및 안내</th>
                            <th>대분류</th>
                            <th>중분류</th>
                            <th>소분류</th>
                            <th>지역</th>
                            <th>시군</th>
                            <th>읍면동</th>
                            <th>주소</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((v, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{v.정보명}</td>
                                        <td>{v.문의및안내}</td>
                                        <td>{v.대분류}</td>
                                        <td>{v.중분류}</td>
                                        <td>{v.소분류}</td>
                                        <td>{v.지역}</td>
                                        <td>{v.시군}</td>
                                        <td>{v.읍면동}</td>
                                        <td>{v.주소}</td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </Table>
                </>
            )}
        </div>
    );
});

export default Travel;