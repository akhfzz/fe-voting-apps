import {
    signup_success, signin_success, user_signin, 
    uploadDataMhs, candidate, identity, table_user,
    voting, email, vote_today, visual } from "./type";

const initialState = {
    nm_organisasi: '',
    password: '',
    access_token: '',
    error: '',
    success: ''
}

const userState = {
    nm_organisasi : '',
    access_token: '',
    error: '',
    success: ''
}

const fileUpload = {
    file: '',
    error: '',
}
const candidateName = {
    nm_pemilihan: '',
    jadwal: '',
    foto: '',
    nama: '',
    visiMisi: '',
    no_kandidat:'',
    error: '',
    success: ''
}
const usrState = {
    user: [],
    error: '',
}
const votingState = {
    kandidat: [],
    error: '',
    nm_pemilihan:''
}

const Email = {
    success: '',
    error: ''
}

const stateVisual ={
    event: '',
    error: '',
    data: {
        labels: '',
        datasets: [
            {
                label: '# of Votes',
                data: '',
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
}

export function votingSystem(state=Email, action){
    switch(action.type){
        case vote_today:
            return{
                ...state,
                success: action.payload.success,
                error: action.payload.error
            }
        default: return state
    }
}

export function SistemVisual(state=stateVisual, action){
    switch(action.type){
        case visual:
            return {
                ...state,
                event: action.payload.event,
                error: action.payload.error,
                data: {
                    labels: action.payload.nama_kandidat,
                    datasets: [
                        {
                            label: `Choice`,
                            data: action.payload.total,
                            backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            ],
                            borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            ],
                            borderWidth: 1,
                        },
                    ],
                }
            }
        default: return state
    }
}

export function getUpUser(state=userState, action){
    switch(action.type){
        case user_signin:
            return {
                ...state,
                nm_organisasi: action.payload.nm_organisasi,
                access_token: action.payload.nm_organisasi,
                error: action.payload.error,
                success: action.payload.success
            }
        default: return state
    }
}

export function signupReducer(state=initialState, action){
    switch(action.type){
        case signup_success:
            return {
                ...state,
                nm_organisasi: action.payload.nm_organisasi,
                password: action.payload.password,
                fakultas: action.payload.fakultas,
                access_token: action.payload.access_token,
                error: action.payload.error,
                success: action.payload.success
            }
        case signin_success:
            return{
                ...state,
                nm_organisasi: action.payload.nm_organisasi,
                password: action.payload.password,
                access_token: action.payload.access_token,
                error: action.payload.error,
                success: action.payload.success
            }
        default: return state
    }
}

export function uploadFile(state=fileUpload, action){
    switch(action.type){
        case uploadDataMhs:
            return {
                ...state,
                file: action.payload.file,
                error: action.payload.error
            }
        default: return state
    }
}

export function pickCandidate(state=candidateName, action){
    switch(action.type){
        case candidate:
            return {
                ...state,
                nm_pemilihan: action.payload.nm_pemilihan,
                jadwal: action.payload.jadwal,
                error: action.payload.error,
                success: action.payload.success
            }
        case identity:
            return {
                ...state,
                error: action.payload.error,
                success: action.payload.success
            }
        default: return state
    }
}
export function fetchusr(state=usrState, action){
    switch(action.type){
        case table_user: 
            return{
                ...state,
                user: action.payload.user,
                error: action.payload.error,
            }
        default: return state
    }
}
export function votingUser(state=votingState, action){
    switch(action.type){
        case voting:
            return{
                ...state,
                kandidat: action.payload.voting,
                error: action.payload.error,
                nm_pemilihan: action.payload.nm_pemilihan
            }
        default: return state
    }
}
export function EmailSending(state=Email, action){
    switch(action.type){
        case email: 
            return {
                ...state,
                success: action.payload.success,
                error: action.payload.error
            }
        default: return state
    }
}