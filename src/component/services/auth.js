export function isLoggedIn() {
    return localStorage.getItem('access_token') !== null && localStorage.getItem('access_token') !== 'undefined';
}
export const LogoutOrganisasi = () => {
    localStorage.clear()
    if(localStorage.getItem('nm_organisasi') === null && localStorage.getItem('access_token')==null){
        window.location.replace('/organisasi')
    } 
}
export const Logout = () => {
    localStorage.clear()
    if(localStorage.getItem('nama') === null && localStorage.getItem('access_item') === null){
        window.location.replace('/')
    } 
}

