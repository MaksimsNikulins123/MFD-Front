

const SET_USER_DATA = 'SET-USER-DATA';
const HANDLE_LOGIN_INPUT_VALUE = 'HANDLE-LOGIN-INPUT-VALUE';
const TOGGLE_LOADING_ANIMATION = 'TOGGLE-LOADING-ANIMATION';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    loading: false,
}

const authReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    
    switch (action.type) {
        case HANDLE_LOGIN_INPUT_VALUE:
            stateCopy.login = action.login;
            stateCopy.email = action.email;
            return stateCopy;
        case TOGGLE_LOADING_ANIMATION:
            stateCopy.loading = action.value;
            return stateCopy;
        case SET_USER_DATA:
           
            return {

            }
            default: 
             return stateCopy;
    }
}

export const HandleLoginInputValueActionCreator = (login, email) => {
    return {
        type: HANDLE_LOGIN_INPUT_VALUE,
        login: login,
        email: email
    }
}
export const ToggleLoadingAnimationActionCreator = (value) => {
    return {
        type: TOGGLE_LOADING_ANIMATION,
        value: value
    }
}

export default authReducer;