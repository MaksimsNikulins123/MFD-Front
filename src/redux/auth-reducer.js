const GET_AUTH_STATUS = 'GET-AUTH-STATUS';
const IS_AUTH = 'IS-AUTH';
const SET_USER_DATA = 'SET-USER-DATA';
const HANDLE_LOGIN_INPUT_VALUE = 'HANDLE-LOGIN-INPUT-VALUE';
const TOGGLE_LOADING_ANIMATION = 'TOGGLE-LOADING-ANIMATION';
const TOGGLE_FORM = 'TOGGLE-FORM';
const AUTHENTICATION_CUCCESSFUL = 'AUTHENTICATION-CUCCESSFUL';
const LOGOUT_CUCCESSFUL = 'LOGOUT-CUCCESSFUL';

let initialState = {
    authStatus: false,
    userId: null,   
    email: null,
    password: null,
    isAuth: false,
    loading: false,
    toggleForm: false
}

const authReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    
    switch (action.type) {
        case GET_AUTH_STATUS:
            stateCopy.authStatus = action.authStatus;
            return stateCopy;
        case IS_AUTH:
            stateCopy.isAuth = action.isAuth;
            return stateCopy;
        case HANDLE_LOGIN_INPUT_VALUE:
            stateCopy.email = action.email;
            stateCopy.password = action.password;
            return stateCopy;
        case TOGGLE_FORM:
            stateCopy.toggleForm = !stateCopy.toggleForm;
            return stateCopy;
        case TOGGLE_LOADING_ANIMATION:
            stateCopy.loading = action.value;
            return stateCopy;
        case AUTHENTICATION_CUCCESSFUL:
            stateCopy.isAuth = action.value;
            return stateCopy;
        case LOGOUT_CUCCESSFUL:
            stateCopy.isAuth = action.value;
            return stateCopy;   
        case SET_USER_DATA:
           
            return {

            }
            default: 
             return stateCopy;
    }
}

export const GetAuthStatusActionCreator = (authStatus) => {
    return {
        type: GET_AUTH_STATUS,
        authStatus: authStatus
    }
}
export const IsAuthActionCreator = (isAuth) => {
    return {
        type: IS_AUTH,
        isAuth: isAuth
    }
}
export const HandleLoginInputValueActionCreator = (email, password) => {
    return {
        type: HANDLE_LOGIN_INPUT_VALUE,
        email: email,
        password: password
    }
}
export const ToggleLoadingAnimationActionCreator = (value) => {
    return {
        type: TOGGLE_LOADING_ANIMATION,
        value: value
    }
}
export const toggleFormActionCreator = () => {
    return {
        type: TOGGLE_FORM,
        
    }
}

export const AuthenticationSuccessActionCreator = (value) => {
    return {
        type: AUTHENTICATION_CUCCESSFUL,
        value: value
        
    }
}
export const LogoutActionCreator = (value) => {
    return {
        type: LOGOUT_CUCCESSFUL,
        value: value
        
    }
}
export default authReducer;