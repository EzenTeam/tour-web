import React, {memo} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getLoadTourList } from '../slices/LoadTourSlice';
import styled from 'styled-components';
import Collapsible from 'react-collapsible';

const LoadTourContainer = styled.div`
    width: 80%;
    min-height: 70vh;
    margin: auto;

    .Collapsible{
        font-size: 30px;
        border: 1px solid black;
        
        //span태그로 구성되어 있음
        .Collapsible__trigger{
            box-sizing: border-box;
            display: block;
            width: 100%;
            height: 70px;
            line-height: 70px;
            padding-left: 20px;
            background-color: teal;
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
    },[dispatch])

    return(

        <LoadTourContainer>
            {
                JSON.stringify(data)

                /********새로고침만하면 자꾸 data가 null오 뜨는중... */
                // loading? "loading":(
                //     error? JSON.stringify(error):(
                //         <>
                //             <h1>두루누비</h1>
                //             {
                //                 data.map((v,i)=>{
                //                     return(
                //                         <Collapsible key={i} trigger={v.themeNm}>
                //                             <p>{v.themedesc}</p>
                //                         </Collapsible>
                //                     )
                //                 })
                //             }
                //         </>
                //     )
                // )
            }
        </LoadTourContainer>
    )
}

export default LoadTour;