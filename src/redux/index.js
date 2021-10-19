import {signupReducer, uploadFile, getUpUser, pickCandidate, SistemVisual, fetchusr, votingUser, EmailSending, votingSystem} from "./reduce";
import { combineReducers } from "redux";

export default combineReducers({
    organisasi: signupReducer,
    file: uploadFile,
    user: getUpUser,
    candidate: pickCandidate,
    usr: fetchusr,
    voting: votingUser,
    email: EmailSending,
    votesys: votingSystem,
    visual: SistemVisual,
});