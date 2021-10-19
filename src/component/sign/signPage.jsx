import React, {Component} from 'react';
import SignupForm from './signForm';
import '../landing/landing.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import {VoterNav} from '../landing/voterNav';

class signPage extends Component{
    componentDidUpdate(prevProps, prevState){
        console.warn('method calls', prevProps)
    }
    render(){
        return(
            <div>
                <VoterNav brand={<FontAwesomeIcon icon={faAngleLeft}/>}/>
                <div className='container'>
                    <SignupForm/>
                </div>
            </div>
        )
    }
}
export default signPage