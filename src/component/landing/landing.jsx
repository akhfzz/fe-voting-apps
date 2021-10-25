import React, {Component} from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import community from '../../image/dsc.jpeg';
import univ from '../../image/unjani.jpg';
import './landing.scss';
import { VoterNav } from './voterNav';
import { connect } from "react-redux";
import { userSignin } from '../../redux/action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Aos from "aos";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Footer(){
    return(
        <div className='footer'>
            <div data-aos='fade-down'>
                <h5 className='text-footer'>DSC TEAM INFO</h5>
                <h6 className='universitas-name'>UNIVERSITAS JENDERAL ACHMAD YANI YOGYAKARTA</h6>
                <h6 className='universitas-name'>Kampus 1:</h6>
                <p className='address'> Jl. Siliwangi, Ringroad Barat, Banyuraden, Gamping, Sleman
                    Daerah Istimewa Yogyakarta 55293</p>
            </div>
            <div className='main center'>
                <div className='x center'>
                    <a target='_blank' rel='noreferrer' href='https://instagram.com/dsc.unjani_yogyakarta?utm_medium=copy_link' data-text='Instagram'>
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                    <a target='_blank' rel='noreferrer' href='#' data-text='Whatsapp'>
                        <FontAwesomeIcon icon={faWhatsapp}/>
                    </a>
                </div>
            </div>
            <footer>
                DEVELOPMENT STUDENT CLUB of UNJAYA
            </footer>
        </div>
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
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block picturer-carousel1"
                            src={community}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className='caption-univ'>DSC UNJANI TEAM</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block picturer-carousel2"
                            src={univ}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <VoterNav brand='VoteApps' documentation='Documentation' accountOrganizer='Organization Account?'/>
                {/* <Row>
                    <Col xs={12} md={8}> */}
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