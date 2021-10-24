import { VoterNav } from "./voterNav";
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export function Documentation(){
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])
    return(
        <>
            <VoterNav brand={<FontAwesomeIcon icon={faAngleLeft}/>}/>
            <div className='policy-system' data-aos='fade-up'>
                <h1 className='header'>Policy of System</h1>
                <p className='requir'>File should (.xlsx) or (.csv) only extension</p>
                <p className='requir'>Photos of candidate should (.jpeg)</p>
                <p className='requir'>Photos should have a size under 16MB</p>
                <p className='requir'>Organization must have dataset of voters before getting access token for voters</p>
                <p className='requir'>The datasset format must have some column (NIM, Nama, Email, Handphone)</p>
                <p className='requir'>Upload datasset to google drive and give our system your links and type file (excel or csv)</p>
                <p className='requir'>Shared link your google drive must be approved by the accessor first</p>
                <p className='requir'>Use your organization name for user and give their access token in your datasset</p>
                <p className='requir'>Before voters login and the voting started, organization should sent access token to voters</p>
                <p className='requir'>Admin doesn't need to delete because the data will be automatically deleted by the system within the specified deadline</p>
                <p className='requir'>System will delete data if event passes the deadline 6 days</p>
                <p className='requir'>Candidate data will be updated according on key in form event name and number of candidate</p>
                <p className='require'>Give feedback or problems to the contacts listed on the landing page</p>
            </div>
            <div className='policy-system' data-aos='fade-right'>
                <h1 className='header'>Feature of system</h1>
                <p className='requir'>In feature of organization, there is table from datasset them</p>
                <p className='requir'>Voters only get feature voting and looking representation event</p>
                <p className='requir'>If you want to send an email message, the message is automatically based on the email address and token in the dataset you uploaded</p>
                <p className='requir'>It takes 3-minutes for the email to be sent to the destination address</p>
                <p className='requir'>You don't need to delete or update the dataset because your organization name has become session and your dataset table will automatically update and delete</p>
            </div>
        </>
    )
}