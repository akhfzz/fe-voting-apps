import './landing.scss';
import { Link } from "react-router-dom";

export function VoterNav({brand, accountOrganizer, documentation, ...props}){
    return(
        <div>
            <ul className='ultra'>
                <li className='list-left'><Link to='' className='brand'>{brand}</Link></li>
                <li className='list-right'><Link to='/organisasi'>{accountOrganizer}</Link></li>
                <li className='list-right'><Link to='/documentation'>{documentation}</Link></li> 
                <li className='list-right'><Link to='/'>{props.landing}</Link></li> 
            </ul>
        </div>
    )
}