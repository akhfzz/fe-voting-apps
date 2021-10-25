import React, {Component} from "react";
import {Logout} from '../services/auth';
import { VotingUsr } from '../../redux/action';
import { connect } from "react-redux";
import './usernav.scss';
import {Col, Container, Row, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from '../landing/landing';
import '../landing/landing.scss';
import Aos from "aos";
import 'aos/dist/aos.css';
import { votingToday } from '../../redux/action'
import {UsersNav} from './userNav'

class UserPage extends Component{
    constructor(props){
        super(props);
        this.submit=this.submit.bind(this);
        this.state={
            no_choice: ''
        }
    }
    componentDidMount(){
        this.props.VotingUsr();
        Aos.init({
            offset: 200,
            duration: 2000,
            delay: 100,
          });
        // console.log(document.getElementById('no_choice').value)
    }
    submit(e){
        const form = new FormData()
        form.append('no_choice', e.target.value)
        this.props.votingToday(form)
        // this.setState({
        //     no_choice: ''
        // })
    }
    render(){
    
        return(
            <div>
                <UsersNav check='/user' visual='/visual' logout={Logout}/>
                <Alert variant="success">
                    <Alert.Heading>Event {this.props.event}</Alert.Heading>
                    <p className='message-of-python'>
                        Mission of candidat, you just click image. Choose the right candidate for your lead organization
                    </p>
                </Alert>
                <Container>
                    <h4 className='message-of-python'>{this.props.success||this.props.error || this.props.err}</h4>
                    <Row>
                        {this.props.kandidat && this.props.kandidat.map(data=>(
                            <Col sm={6}>
                                <div key={data.id} className='parent-vote'>
                                    <div className='for-image'>
                                        <p className='name-candidate'>{data.nama}</p>
                                        <img src={'data:image/png;base64, '+data.foto} alt={data.nama} className='image-vote'/>
                                        <div className='overlay'>
                                            <p className='text'>{data.visi_misi}</p>
                                        </div>
                                    </div>
                                    <p className='header'>{data.fakultas}</p>
                                    <p className='schedule'>{data.jadwal}</p>
                                    <div className='center'>
                                        <input type='button' value={data.no_kandidat} className='id-choice' onClick={this.submit}/>
                                    </div>
                                </div>  
                            </Col>  
                        ))}
                    </Row>
                </Container>
                <Footer/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        event: state.voting.nm_pemilihan,
        kandidat: state.voting.kandidat,
        err: state.voting.error,
        success: state.votesys.success,
        error: state.votesys.error
    }
}
export default connect(mapStateToProps, {VotingUsr, votingToday})(UserPage)