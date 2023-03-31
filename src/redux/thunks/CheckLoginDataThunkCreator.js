
// import SetLoginDataToApi from "../../api/SetLoginDataToApi"

import Login from "../../api/Login"
// import { AuthenticationSuccessActionCreator, ToggleLoadingAnimationActionCreator } from "../auth-reducer"

export const CheckLoginDataThunkCreator = (email, password) => {
    
        return (dispatch) => {
            Login(dispatch, email, password)
            // console.log('request to server to check login form data')
            // console.log('response from server')
            
            // dispatch(ToggleLoadingAnimationActionCreator(false))
            // dispatch(AuthenticationSuccessActionCreator(true))
            
            // SetLoginDataToApi(searching, currentPage, usersCountOnPage, dispatch)
            
    }
}