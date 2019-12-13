import {SUBMIT_CREDENTIALS} from '../actions/types';

export function submitCredentials(cred){
    console.log(cred);
    return function(dispatch){
        dispatch({
            type:SUBMIT_CREDENTIALS,
            payload:cred
        });
    }
}