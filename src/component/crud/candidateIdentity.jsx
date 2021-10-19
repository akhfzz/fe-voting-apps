import React from 'react';
import {identityCandidate} from '../../redux/action';
import { connect } from 'react-redux';
import './usernav.scss';

class CandidateIdentity extends React.Component{
    constructor(props){
        super(props)
        this.submitting = this.submitting.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeFile = this.changeFile.bind(this)
        this.state = {
            foto: '',
            nama: '',
            no_kandidat: '',
            visi_misi: '',
            fakultas: ''
        }      
    }
    changeFile(e){
        console.log('file', e.target.files[0])
        let file = e.target.files[0]
        if(file){
            const reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this)
            reader.readAsBinaryString(file)
        }
    }
    _handleReaderLoaded(readerEvt){
        let binaryString = readerEvt.target.result
        this.setState({
            foto: btoa(binaryString)
        })
    }
    handleChange(e){
        const nama= e.target.name;
        const value = e.target.value;
        this.setState({
            [nama]:value
        })
    }
    submitting(e){
        e.preventDefault();
        this.props.identityCandidate(this.state);
        this.setState({
            foto: '',
            nama: '',
            no_kandidat: '',
            visi_misi: '',
            fakultas: ''
        })
    }
    render(){
        return(
            <div className='form-identity'>
                <form onSubmit={this.submitting} className='form'>
                    <h5 className='header-of'>Identity of candidate</h5>
                    <input type='file' name='foto' id='foto' onChange={this.changeFile} placeholder='Photo of Candidate' accept='.jpg, .jpeg, .png'/>
                    <input type='text' name='no_kandidat' id='no_kandidat' onChange={this.handleChange} value={this.state.no_kandidat} placeholder='Number of Candidate'/>
                    <input type='text' name='fakultas' id='fakultas' onChange={this.handleChange} value={this.state.fakultas} placeholder='Faculty come from'/>
                    <input type='text' name='nama' onChange={this.handleChange} value={this.state.nama} id='nama' placeholder='Name of Candidate'/>
                    <textarea name='visi_misi' id='visi_misi' onChange={this.handleChange} value={this.state.visi_misi} placeholder='Target Candidate'/>
                    <button className='save'>Save</button>
                </form>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        err: state.candidate.error,
        succ: state.candidate.success
    }
}
export default connect(mapStateToProps, {identityCandidate})(CandidateIdentity)