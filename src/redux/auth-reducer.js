

const SET_USER_DATA = 'SET-USER-DATA';
const HANDLE_LOGIN_INPUT_VALUE = 'HANDLE-LOGIN-INPUT-VALUE';
const TOGGLE_LOADING_ANIMATION = 'TOGGLE-LOADING-ANIMATION';
const TOGGLE_FORM = 'TOGGLE-FORM';
const AUTHENTICATION_CUCCESSFUL = 'AUTHENTICATION-CUCCESSFUL';

let initialState = {
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
        case HANDLE_LOGIN_INPUT_VALUE:
            stateCopy.login = action.login;
            stateCopy.email = action.email;
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
        case SET_USER_DATA:
           
            return {

            }
            default: 
             return stateCopy;
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

export default authReducer;