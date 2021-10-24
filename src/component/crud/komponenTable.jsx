import {Table, Button, Pagination, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './usernav.scss';
import {sendingEmail} from '../../redux/action';
import {useDispatch} from 'react-redux';
import {useState} from 'react'

export const DataUser = ({posted, load, ...props}) => {
    if(load){
        return <h3>Loading..</h3>
    }
    if(posted){
        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Email</th>
                        <th>Token</th>
                    </tr>
                </thead>
                <tbody>
                {posted.map((data)=>(
                    <tr key={data.index}>
                        <td>{data.NIM}</td>
                        <td>{data.Email}</td>
                        <td>{data.access_token}-xxx-xxx</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        )
    }else{
        return(
            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>NIM</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Token</th>
                        </tr>
                    </thead>
                </Table>
                <p className='message-of-python'>{props.error}</p>
            </>
        )
    }
}
export const Paginate = ({satuan, totalpost, paginasi})=>{
    const number = [];
    const dispatch = useDispatch()
    console.log(number)
    let i = 1;
    for(i; i < Math.ceil(totalpost/satuan); i++){
        number.push(i);
    }
    return(
        <>
            <Pagination>
                <Pagination.Item onClick={()=>dispatch(sendingEmail())}>
                    <span className='page'>Share with Email</span>
                </Pagination.Item>
                {number.map((no)=>(
                    <Pagination.Item key={no} onClick={()=>paginasi(no)}>
                        {no}
                    </Pagination.Item>
                ))}
            </Pagination>
        </>
    )
}

export function AlertInfo(props){
  const [show, setShow] = useState(true);

  return (
        <>
            <Alert show={show} variant="success">
                <Alert.Heading>{props.heading}</Alert.Heading>
                    <p>
                      {props.info}
                    </p>
                <hr />
                <div className="d-flex justify-content-end">
                  <Button onClick={() => setShow(false)} variant="outline-success">
                    Close me 
                  </Button>
                </div>
            </Alert>
        </>
    )
}    


