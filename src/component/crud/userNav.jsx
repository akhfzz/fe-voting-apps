import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import './usernav.scss'
import $ from 'jquery'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faDatabase, faSignOutAlt, faPeopleArrows, faCheck } from '@fortawesome/free-solid-svg-icons';

export function UserNav(props){
    useEffect(()=>{
        $(function(){
            var current = this.location.pathname;
            $('.nav .nav-item .nav-link').each(function(){
                if($(this).attr('href').indexOf(current) !== -1){
                    $(this).parent().addClass('active');
                }
                if($(this).attr('href').indexOf(current) === -1){
                    $(this).parent().removeClass('active');
                }
            })
        })
    }, [])
    return(
        <Nav fill variant="tabs">
            <Nav.Item>
                <Nav.Link href={props.datasset}>
                    <FontAwesomeIcon icon={faDatabase}/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={props.visual}>
                    <FontAwesomeIcon icon={faChartBar}/>
                </Nav.Link>  
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={props.kandidat}>
                    <FontAwesomeIcon icon={faPeopleArrows}/>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={props.logout}>
                    <FontAwesomeIcon icon={faSignOutAlt}/>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
export function UsersNav(props){
    useEffect(()=>{
        $(function(){
            var current = this.location.pathname;
            $('.nav .nav-item .nav-link').each(function(){
                if($(this).attr('href').indexOf(current) !== -1){
                    $(this).parent().addClass('active');
                }
                if($(this).attr('href').indexOf(current) === -1){
                    $(this).parent().removeClass('active');
                }
            })
        })
    }, [])
    return(
        <Nav fill variant="tabs">
            <Nav.Item>
                <Nav.Link href={props.check}>
                    <FontAwesomeIcon icon={faCheck}/>
                </Nav.Link>  
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={props.visual}>
                    <FontAwesomeIcon icon={faChartBar}/>
                </Nav.Link>  
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={props.logout}>
                    <FontAwesomeIcon icon={faSignOutAlt}/>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}