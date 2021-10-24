import React, { useEffect } from 'react';
import { Doughnut, Bar} from 'react-chartjs-2';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import {visualVote} from '../../redux/action';
import {UsersNav} from './userNav';
import {Logout} from '../services/auth';
import './usernav.scss';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function GrafikUser(){
  const visuals = useSelector(state=>state.visual.data)
  const event = useSelector(state=>state.visual.event) 
  const error = useSelector(state=> state.visual.error)
  if(error){
    return(
      <>
        <UsersNav check='/user' visual='/visual' logout={Logout}/>
        <h5 className='message-of-python'>{error}</h5>
      </>
    )
  }else{
    return(
      <>
        <UsersNav check='/user' visual='/visual' logout={Logout}/>
        <PieChart visualVote={visualVote} event={event} visual={visuals}/>
      </>
    )
  }
}
export default connect(null, visualVote)(GrafikUser)

export function PieChart(props){
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  useEffect(()=>{
    props.visualVote()
  }, [])
  return(
    <>
      <div className='header'>
        <h1 className='title'>Event {props.event}</h1>
      </div>
      <Container>
        <Row>
          <Col sm={6}>
            <Doughnut data={props.visual} width={10} height={10} options={options}/>
          </Col>
          <Col sm={6}>
            <Bar data={props.visual} width={10} height={10} options={options}/>
          </Col>
        </Row>
      </Container>
    </>
  )
}