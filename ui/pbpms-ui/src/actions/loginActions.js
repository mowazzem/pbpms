import {LOGIN_SUCCESS,LOGIN_PENDING,LOGIN_ERROR} from '../actions/types';

function setLoginSuccess(isLoginSuccess){
    return{
        type:LOGIN_SUCCESS,
        isLoginSuccess
    }
}

function setLoginPending(isLoginPending){
    return{
        type:LOGIN_PENDING,
        isLoginPending
    }
}

function setLoginError(loginError){
    return{
        type:LOGIN_ERROR,
        loginError
    }
}

export function login(cred){
    return function(dispatch){
        dispatch(setLoginSuccess(false));
        dispatch(setLoginPending(true));
        dispatch(setLoginError(null));

        sendLoginRequest(cred)
          .then(success=>{
              dispatch(setLoginSuccess(true));
              dispatch(setLoginPending(false));
          })
          .catch(err=>{
              dispatch(setLoginPending(true));
              dispatch(setLoginError(err))
          })
    }
}


function sendLoginRequest(cred){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(cred.username==='mowazzem'&&cred.password==='01558'){
                return resolve(true);
            }else{
                return reject(new Error("Authentication failed!"));
            }
        }, 1000);        
    });
}