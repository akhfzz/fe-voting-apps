import React from "react";
import {uploadFileMHS} from '../../redux/action';
import { connect } from "react-redux";
import {UserNav} from './userNav';
import TableUser from "./tableUser";
import './usernav.scss';
import {AlertInfo} from './komponenTable'
import {Container} from 'react-bootstrap';
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
            input: '',
            coppySuccess: ''
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
        const form = new FormData();
        form.append('file', this.file.current.files[0].name);
        // form.append('nm_organisasi', this.nm_organisasi.current.value)
        this.props.uploadFileMHS(form)
    }
    
    sentMail(e){
        e.preventDefault()
        this.props.sendingEmail()
    }
    render(){
        return(
            <div>
                <UserNav datasset='/input-datasset' visual='/visual-organisasi' kandidat='/candidate' logout={LogoutOrganisasi}/>
                <AlertInfo heading={localStorage.getItem('nm_organisasi')} info={<p className='mb-0'>Before you use our system, read the documentation</p>}/>
                <p className='message-of-python'>{this.props.success_message || this.props.file || this.props.error}</p>
                <Container>
                    <form className='upload'>
                        <input type='file' ref={this.file} name='file' id='file' placeholder='File must xlsx or csv'/>
                        <button className='submit-datasset' onClick={this.uploadFileMHS} >Submit</button>
                    </form>
                </Container>
                <TableUser/>
            </div>  
        )
    }
}


// /input-datasset
// /candidate 
// LogoutOrganisasi
// #vote
const mapStateToProps = state => {
    return { 
        file: state.file.file,
        error: state.file.error,
        err_message: state.email.error,
        success_message: state.email.success,
    }
}

export default connect(mapStateToProps, {uploadFileMHS})(ProfilOrganisasi)