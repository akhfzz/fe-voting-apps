import {BrowserRouter as Router, Route} from 'react-router-dom';
import signPage from './component/sign/signPage';
import { Routing, Routing2 } from './component/routing/routing';
import { isLoggedIn } from './component/services/auth';
import ProfilOrganisasi from './component/crud/retrive';
import {Documentation} from './component/landing/documentation'
import Candidate from './component/crud/candidat';
import {SuspenseLoading} from './component/landing/suspense';
import GrafikUser from '../src/component/crud/visualisasi';
import GrafikOrganisasi from '../src/component/crud/visualorganisasi';
import UserPage from '../src/component/crud/userVote'

function App() {
  return (
    <div>
        <Router>
            <Route exact path='/organisasi' component={signPage}/>
            <Routing exact isloggedin={isLoggedIn()} path='/input-datasset' component={ProfilOrganisasi}/>
            <Route exact path='/' component={SuspenseLoading}/>
            <Routing2 exact isloggedin={isLoggedIn()} path='/user' component={UserPage}/>
            <Route exact path='/documentation' component={Documentation}/>
            <Route exact path='/candidate' component={Candidate}/>
            <Route exact path='/visual' component={GrafikUser}/>
            <Route exact path='/visual-organisasi' component={GrafikOrganisasi}/>
        </Router>
    </div>  
  );
}

export default App;
