import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing.scss';
import { VoterNav } from './voterNav';
import { connect } from "react-redux";
import { userSignin } from '../../redux/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Aos from "aos";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Footer(){
    return(
            <footer>
                <div className='x center'>
                    <a target='_blank' rel='noreferrer' href='https://instagram.com/dsc.unjani_yogyakarta' data-text='check our IG!'>
                            <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a target='_blank' rel='noreferrer' href='https://www.youtube.com/channel/UCMlDSZLPzPKf6cfHbFhECvg' data-text='check our Yt Channel!'>
                            <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                    <a target='_blank' rel='noreferrer' href='mailto:dsc.unjaniyogyakarta@gmail.com' data-text='Feel Free to Ask!'>
                            <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </div>
                <p>&copy; 2021 Developer Student Clubs of Universitas Jenderal Achmad Yani Yogyakarta. All rights reserved.</p>
            </footer>
    )
}


class LandingPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            nm_organisasi: '',
            access_token: '',
            loading: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }
    componentDidMount(){
        Aos.init({
            offset: 200,
            duration: 2000,
            delay: 100,
          });
    }

    handleChange(e){
        const name = e.target.name;
        const value = e.target.value 
        this.setState({
            [name]:value
        })
    }
    loginUser(e){
        e.preventDefault();
        this.props.userSignin(this.state, localStorage.getItem('access_token'));
        this.setState({
            nm_organisasi: '',
            access_token: '',
        })
    }
    render(){
        return(
            <div>
                <VoterNav brand='Vote App' documentation='Documentation' accountOrganizer='Organization Account?'/>

                <div className='box'>
                    <form onSubmit={this.loginUser} className='form-box' data-aos="fade-right">
                        <div className='headerUp'>
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                        <h5 className='alert-user'>{this.props.error}</h5>
                        <input id='nm_organisasi_login'
                            className='input-user'
                            name='nm_organisasi'
                            value={this.state.nm_organisasi}
                            type='text'
                            placeholder='Your organization name'
                            onChange={this.handleChange} required/>
                        <input id='access_token'
                            className='input-user'
                            name='access_token'
                            value={this.state.access_token}
                            type='text'
                            placeholder='Your access token'
                            onChange={this.handleChange} required/>     
                        <button className='user-submit' type='submit'>Login</button>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        error: state.user.error
    }
}
export default connect(mapStateToProps, {userSignin})(LandingPage)