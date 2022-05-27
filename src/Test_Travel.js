import React, { memo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { TravelList } from './slices/TravelSlice';

const Test = memo(() => {
    const dispatch = useDispatch();
    const { meta, data, loading, error } = useSelector((state) => state.Travel);

    React.useEffect(() => {
        dispatch(TravelList({
        }))
    }, [dispatch]);

    return (
        loading ? "loading..." : (
            error ? JSON.stringify(error) : (
                <>
                    <h1>meta</h1>
                    {JSON.stringify(meta)}
                    <h1>data</h1>
                    {JSON.stringify(data)}
                </>
            )
        )
    );
});

export default Test;