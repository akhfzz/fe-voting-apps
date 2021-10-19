import React, {Component} from 'react';
import './signup.scss';
import { addOrganisasi, OrganisasiIn } from '../../redux/action';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import {Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserPlus, faArrowRight} from '@fortawesome/free-solid-svg-icons'

class SignupForm extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.onSignup = this.onSignup.bind(this);
        this.onSignin = this.onSignin.bind(this);
        this.newUser = this.newUser.bind(this);
        this.validator = new SimpleReactValidator();

        this.state = {
            nm_organisasi: "",
            password: "",
            fakultas: '',
            access_token: "",
            errors: false,
            loading: false
        }
    }
    handleChange(e){
        const name = e.target.name 
        const value = e.target.value 
        this.setState({
            [name]:value
        })
        console.log(this.state)
    }
    onSignup(e){
        e.preventDefault();
        if(this.validator.allValid()){
            this.props.addOrganisasi(this.state)
            this.setState({
                nm_organisasi: '',
                password: '',
                access_token: '',
                errors: true
            })
        }else{
            this.validator.showMessages();
            this.forceUpdate()
        }
    }
    newUser(){
        this.setState({
            nm_organisasi: '',
            password: '',
            access_token: '',
            errors: true
        })
    }
    
    onSignin(e){
        e.preventDefault();
        this.props.OrganisasiIn(this.state, localStorage.getItem('access_token'))
        this.setState({
            loading: true,
            nm_organisasi: '',
            password: ''
        })
    }
    render(){
        return(
            <div className='box-container'>
                {this.state.errors ? (
                    <div className='formSignup'>   
                    <form className='form-organization'>
                        <h2 className='headerUp'>Login</h2>
                        <p className='alert'>{this.props.sucs || this.props.err}</p>

                        <input id='nm_organisasi'
                        name='nm_organisasi'
                        value={this.state.nm_organisasi}
                        className='text-input'
                        type='text'
                        placeholder='Your organization name'
                        onChange={this.handleChange} required/>

                        <input id='password'
                        name='password'
                        placeholder='Password'
                        className='password-input'
                        value={this.state.password}
                        type='password'
                        onChange={this.handleChange} required/>
                        <button className='buttonSignin' onClick={this.onSignin}>
                        {this.state.loading ? (
                            <div>
                                <Spinner animation="border" role="status" size='sm'>
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        ):(
                            <div>
                                Login
                            </div>
                        )
                        }
                        </button>
                    </form>
                    </div>
                    ):(
                    <div className='formSignup'>   
                    <form onSubmit={this.onSignup} className='form-organization'>
                        <div className='headerUp'>
                            <FontAwesomeIcon icon={faUserPlus}/>
                        </div>
                        <p className='alert'>{this.props.err}</p>

                        <input id='nm_organisasi'
                        name='nm_organisasi'
                        value={this.state.nm_organisasi}
                        type='text'
                        className='text-input'
                        placeholder='Your organization name'
                        onChange={this.handleChange} required/>
                        {this.validator.message('nm_organisasi', this.state.nm_organisasi, 'required|min:5|max:50', {className: 'text-danger'})}

                        
                        <input id='fakultast'
                        name='fakultas'
                        value={this.state.fakultas}
                        type='text'
                        className='text-input'
                        placeholder='Your faculty'
                        onChange={this.handleChange} required/>
                        {this.validator.message('fakultas', this.state.fakultas, 'required|min:0|max:250', {className: 'text-danger'})}

                        <input id='password'
                        name='password'
                        placeholder='Password'
                        className='password-input'
                        value={this.state.password}
                        type='password'
                        onChange={this.handleChange} required/>
                        {this.validator.message('password', this.state.password, 'required|min:5|max:10', {className: 'text-danger'})}

                        <button type='submit' className='buttonSignup'>Register</button>
                        <button className='buttonSignin' onClick={this.newUser}>
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </button>
                    </form>
                    </div>
                    )
                }
            </div>  
        )
    }
}
const mapStateToProps = state => {
    return{
        err: state.organisasi.error,
        sucs: state.organisasi.success
    }
}
export default connect(mapStateToProps, {addOrganisasi, OrganisasiIn})(SignupForm)