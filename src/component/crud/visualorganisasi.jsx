import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import {visualVote} from '../../redux/action';
import {UserNav} from './userNav';
import React, { useEffect } from 'react';
import {LogoutOrganisasi} from '../services/auth';
import {PieChart} from './visualisasi'
import './usernav.scss'

function GrafikOrganisasi(){
    const visual = useSelector(state=>state.visual.data)
    const event = useSelector(state=>state.visual.event) 
    const error = useSelector(state=> state.visual.error)
    if(error){
      return(
        <>
          <UserNav datasset='/input-datasset' visual='/visual-organisasi' kandidat='/candidate' logout={LogoutOrganisasi}/>
          <h5 className='message-of-python'>{error}</h5>
        </>
      )
    }else{
      return(
        <>
          <UserNav datasset='/input-datasset' visual='/visual-organisasi' kandidat='/candidate' logout={LogoutOrganisasi}/>
          <PieChart visualVote={visualVote} event={event} visual={visual}/>
        </>
      )
    }
  }
  export default connect(null, visualVote)(GrafikOrganisasi)