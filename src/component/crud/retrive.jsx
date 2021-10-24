import React from "react";
import {uploadFileMHS} from '../../redux/action';
import { connect } from "react-redux";
import {UserNav} from './userNav';
import TableUser from "./tableUser";
import './usernav.scss';
import {AlertInfo} from './komponenTable'
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LogoutOrganisasi} from '../services/auth';

class ProfilOrganisasi extends React.Component{
    constructor(props){
        super(props);
        this.uploadFileMHS = this.uploadFileMHS.bind(this);
        this.file = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.sentMail = this.sentMail.bind(this)

        this.state = {
            url: '',
            type: '',
        }
    }

    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        })
    }
    
    uploadFileMHS(e){
        e.preventDefault();
        this.props.uploadFileMHS(this.state)
    }
    
    sentMail(e){
        e.preventDefault()
        this.props.sendingEmail()
    }
    render(){
        return(
            <div>
                <UserNav datasset='/input-datasset' visual='/visual-organisasi' kandidat='/candidate' logout={LogoutOrganisasi}/>
                <AlertInfo heading={localStorage.getItem('nm_organisasi')} info={<p className='mb-0'>Read our documentation before using the system</p>}/>
                <p className='message-of-python'>{this.props.success_message || this.props.file || this.props.error}</p>
                <Container>
                    <form className='upload' encType='multipart/form-data'>
                        <Row>
                            <Col sm={4}>
                                <input type='text' name='url' id='url' onChange={this.handleChange} value={this.state.url} placeholder='Link google drive'/>
                            </Col>
                            <Col sm={4}>
                                <input type='text' name='type' id='type' placeholder='excel or csv' onChange={this.handleChange} value={this.state.type}/>
                            </Col>
                            <Col sm={4}>
                                <button className='submit-datasset' onClick={this.uploadFileMHS}>Submit</button>
                            </Col>
                        </Row>
                    </form>
                </Container>
                <TableUser/>
            </div>  
        )
    }
}

const mapStateToProps = state => {
    return { 
        file: state.file.file,
        error: state.file.error,
        err_message: state.email.error,
        success_message: state.email.success,
    }
}

export default connect(mapStateToProps, {uploadFileMHS})(ProfilOrganisasi)