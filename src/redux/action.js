import { 
    signup_success, signin_success, user_signin, uploadDataMhs,
    candidate, identity, table_user, voting, email, vote_today, visual} from "./type";
import axios from "axios";
import {isLoggedIn} from '../component/services/auth'

export const addOrganisasi = obj => {
  return (dispatch) => {
      axios.post('http://127.0.0.1:5000/daftar', obj, {
        headers:{
        'Accept': 'application/json',
       'Content-Type': 'application/json',
      }
    })
      .then(response => {
          dispatch({
              type: signup_success,
              payload: response.data
          }) 
          localStorage.setItem('access_token', response.data.access_token)
      })
  }
}

export const OrganisasiIn = (obj, token) => {
    return (dispatch) => {
        axios.post('http://127.0.0.1:5000/login', obj, {
            headers:{
                'Accept': 'application/json',
               'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
        })
        .then(request => {
            dispatch({
                type: signin_success,
                payload: request.data
            })
            localStorage.setItem('access_token', request.data.access_token);
            localStorage.setItem('nm_organisasi', request.data.nm_organisasi)
            localStorage.setItem('id', request.data.id_organisasi)
            if(isLoggedIn()){
                window.location.replace('/input-datasset');
            }
        })
    }
}

export const fetchUser = () => {
    return dispatch => {
        axios.get(`http://127.0.0.1:5000/getting/`+localStorage.getItem('nm_organisasi'), {
            headers:{
            'Accept': 'application/json',
           'Content-Type': 'application/json'
            }
        })
        .then(response => {
            dispatch({
                type: table_user,
                payload: response.data
            })
        })
        .catch(err=>err.message)
    }
}

export const sendingEmail = () => {
    return dispatch => {
        axios.post(`http://127.0.0.1:5000/mail/`+localStorage.getItem('nm_organisasi'))
        .then(response => {
            dispatch({
                type: email,
                payload: response.data
            })
        })
    }
}

export const uploadFileMHS = obj => {
    return dispatch => {
        axios.post(`http://127.0.0.1:5000/inputFile/`+localStorage.getItem('nm_organisasi'), obj, {
        headers:{
            'Accept': 'application/json',
           'Content-Type': 'application/json'
        }
        })
        .then(response => {
            dispatch({
                type: uploadDataMhs,
                payload: response.data 
            })
        })
        .catch(err => {
            // console.log(err.message)
            return false
        })
    }
}
export const userSignin = (obj, token) => {
    return dispatch => {
        axios.post('http://127.0.0.1:5000//userSignin', obj, {
            headers:{
                'Accept': 'application/json',
               'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        .then(response => {
            dispatch({
                type: user_signin,
                payload: response.data 
            })
            localStorage.setItem('id', response.data.id_organisasi)
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('nama', response.data.nama);
            localStorage.setItem('nm_organisasi', response.data.nm_organisasi)
            if(isLoggedIn()){
                window.location.replace('/user');
            }
        })
    }
}
export const nameOfCandidate = obj => {
    return dispatch => {
        axios.post(`http://127.0.0.1:5000/candidate/`+localStorage.getItem('id'), obj)
        .then(response => {
            dispatch({
                type: candidate,
                payload: response.data 
            })
            localStorage.setItem('id_kandidat', response.data.id_kandidat)
        })
    }
}

export const votingToday = (obj) => {
    return dispatch => {
        axios.post(`http://127.0.0.1:5000/voting/`+localStorage.getItem('access_token')+`/`+localStorage.getItem('id'), obj)
        .then(response =>{
            dispatch({
                type: vote_today,
                payload: response.data
            })
        })
    }
}

export const visualVote = () => {
    return dispatch => {
        axios.get(`http://127.0.0.1:5000/visual/`+localStorage.getItem('id'))
        .then(response =>{
            dispatch({
                type: visual,
                payload: response.data
            })
        })
    }
}

export const identityCandidate = obj => {
    return dispatch => {
        axios.post(`http://127.0.0.1:5000/identity/`+localStorage.getItem('id_kandidat'), obj)
        .then(response=> {
            dispatch({
                type: identity,
                payload: response.data 
            })
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
}
export const VotingUsr = () => {
    return dispatch => {
        axios.get(`http://127.0.0.1:5000/vote/` + localStorage.getItem('nm_organisasi'))
        .then(response =>{
            dispatch({
                type: voting,
                payload: response.data
            })
        })
    }
}