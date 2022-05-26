import React, {memo} from 'react';

import { useSelector, useDispatch} from 'react-redux';
import { getLoadTourList } from './slices/LoadTourSlice';

const Test_loadTour = memo(()=>{
    const dispatch = useDispatch();
    const {data,loading, error} = useSelector((state)=>state.loadTour);

    React.useEffect(()=>{
        dispatch(getLoadTourList())
    },[dispatch])

    return(
        loading? "loading..." : (
            error? JSON.stringify(error) : (
                <>
                    <h1>data</h1>
                    {JSON.stringify(data)}
                </>
            )
        )
    )
});

export default Test_loadTour;