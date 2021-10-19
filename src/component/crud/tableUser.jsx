import {useEffect, useState} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import './usernav.scss';
import { DataUser, Paginate } from './komponenTable';
import {fetchUser} from '../../redux/action';

function TableUsr(props){
    //calling redux
    const usrMsg = useSelector(state=>state.usr.error)
    const user = useSelector(state=>state.usr.user)

    const [pagesSide, setPageSide] = useState(1);
    const [timing, setTiming] = useState(false);
    const [perPageSide] = useState(6);

    const paginateNumber = number => setPageSide(number);
    const lastIndex = pagesSide * perPageSide;
    const firstIndex = lastIndex - perPageSide;
    
    if(user){
        const situate = user.slice(firstIndex, lastIndex);
        return(
            <div>
                <DataUser posted={situate} 
                load={timing} 
                error={ usrMsg }
                />
                <Paginate satuan={perPageSide} totalpost={user.length} paginasi={paginateNumber}/>
            </div>
        )
    }else{
        return(
            <div>
                <DataUser posted={user} 
                load={timing} 
                error={ usrMsg }
                />
            </div>
        )
    }
}

export default connect(null, fetchUser)(TableUsr)