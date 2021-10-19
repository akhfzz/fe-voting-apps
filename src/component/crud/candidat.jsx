import React from 'react';
import { connect } from 'react-redux';
import {UserNav} from './userNav';
import CandidateName from './nameCandidate';
import CandidateIdentity from './candidateIdentity';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Container, Row, Col} from 'react-bootstrap';
import './usernav.scss';
import {LogoutOrganisasi} from '../services/auth';

class Candidate extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            slide: false,
        }
    }
    componentDidMount(){
        $(function(){
            var current = this.location.pathname;
            $('.nav .nav-item .nav-link').each(function(){
                if($(this).attr('href').indexOf(current) !== -1){
                    $(this).parent().addClass('active');
                }
                if($(this).attr('href').indexOf(current) === -1){
                    $(this).parent().removeClass('active');
                }
            })
        })
    }
    render(){
        return(
            <div>
                <UserNav datasset='/input-datasset' visual='/visual-organisasi' kandidat='/candidate' logout={LogoutOrganisasi}/>
                <Alert variant='success'>
                    Data will be updated if you input twice
                </Alert>
                <p className='alert-post'>{this.props.error || this.props.success}</p>
                <Row>
                    <Col sm={5}>
                        <CandidateName/>
                    </Col>
                    <Col sm={7}>
                        <CandidateIdentity/>
                    </Col>
                </Row>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        error: state.candidate.error,
        success: state.candidate.success
    }
}
export default connect(mapStateToProps, null)(Candidate)