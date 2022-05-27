import React, {memo} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getLoadTourList } from '../slices/LoadTourSlice';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';
import ErrorView from './ErrorView';

const LoadTourContainer = styled.div`
    width: 80%;
    min-height: 70vh;
    margin: auto;

    .Collapsible{
        font-size: 27px;
        
        //span태그로 구성되어 있음
        .Collapsible__trigger{
            box-sizing: border-box;
            border-radius: 10px;
            display: block;
            width: 100%;
            height: 70px;
            line-height: 70px;
            padding-left: 20px;
            background-color: teal;
            color: white;
            margin: 5px;
        }

        p{
            padding: 0 20px;
            font-size: 20px;
            line-height: 30px;
        }
    }
`;

const LoadTour = () => {

    const dispatch = useDispatch();
    const {data,loading, error} = useSelector((state)=>state.loadTour);

    React.useEffect(()=>{
        dispatch(getLoadTourList())
        // console.log('나왔다!')
    },[dispatch])

    return(

        <LoadTourContainer>
            {
                // JSON.stringify(data)
                loading? "loading":(
                    error? <ErrorView error={error}/>:(
                        <>
                            <h1>두루누비</h1>
                            {
                                data?.map((v,i)=>{
                                    return(
                                        <Collapsible key={i} trigger={v.themeNm}>
                                            <p dangerouslySetInnerHTML={{__html:v.themedesc}}></p>
                                        </Collapsible>
                                    )
                                })
                            }
                        </>
                    )
                )
            }
        </LoadTourContainer>
    )
}

export default LoadTour;