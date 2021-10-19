import React from 'react';
import { nameOfCandidate } from '../../redux/action';
import { connect } from 'react-redux';
import './usernav.scss'

class CandidateName extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nm_pemilihan: '',
            jumlah_kandidat: '',
            slide: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.Submitt = this.Submitt.bind(this);
        this.newInput = this.newInput.bind(this)
    }
    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    Submitt(e){
        e.preventDefault();
        this.props.nameOfCandidate(this.state)
        this.setState({
            nm_pemilihan: '',
            slide: true
        })
    }
    newInput(){
        this.setState({
            slide: false
        })
    }
    render(){
        return(
            <div>
                {this.state.slide ? (
                    <button onClick={this.newInput}>New name of voting(?)</button>
                ):(
                    <div className='form-identity'>
                        <form onSubmit={this.Submitt} className='form'>
                            <h5 className='header-of'>Name of Event</h5>
                            <input name='nm_pemilihan' id='nm_pemilihan' onChange={this.handleChange} value={this.state.nm_pemilihan} placeholder='Name of voting event'/>
                            <input name='jumlah_kandidat' id='jumlah_kandidat' onChange={this.handleChange} value={this.state.jumlah} placeholder='How many candidate'/>
                            <button className='save'>Save</button>
                        </form>
                    </div>
                )
                }
            </div>
        )
    }
}
export default connect(null, {nameOfCandidate})(CandidateName)