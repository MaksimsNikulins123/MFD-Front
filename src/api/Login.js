// import { useEffect } from 'react';
import axios from "axios";
import { IsAuthActionCreator, ToggleLoadingAnimationActionCreator } from "../redux/auth-reducer";
import { RequestToApiActionCreator, ResponseFromApiActionCreator } from "../redux/search-reducer";


const Login = (dispatch, email, password) => {
// debugger

   axios.post('http://127.0.0.1:8000/api/V1/patients/login',

    {
        login_email: email,
        login_password: password,
        
    }
    )
.then(
    dispatch(ToggleLoadingAnimationActionCreator(true)),
    dispatch(RequestToApiActionCreator(true)),
    dispatch(ResponseFromApiActionCreator(false))
)
.then(response => { 
    // return response 
    // debugger
    // console.log(response)
    dispatch(ResponseFromApiActionCreator(true))
    dispatch(IsAuthActionCreator(response.data.isAuth))
    dispatch(ToggleLoadingAnimationActionCreator(false))
    // dispatch(GetAuthStatusActionCreator(response.data.authStatus))
    // dispatch(ToggleLoadingAnimationActionCreator(false))
    // dispatch(ToggleLoadingAnimationActionCreator(false));
    // dispatch(RequestToApiActionCreator(false));
    // dispatch(ResponseFromApiActionCreator(true));
    // if(response.data.data.length === 0) {
    //     dispatch(ResponseFromApiActionCreator(false));
    // }else {
    //     dispatch(AxiosFindCurrentUsersActionCreator(response.data.data, response.data.foundUsersCount));
    // }
    
})
}
export default Login;