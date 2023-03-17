// import { useEffect } from 'react';
import axios from "axios";
import { AxiosFindCurrentUsersActionCreator, ResponseFromApiActionCreator, ToggleLoadingAnimationActionCreator } from '../redux/search-reducer';
import { RequestToApiActionCreator } from '../redux/search-reducer';

const SetLoginDataToApi = (searching, currentPage, usersCountOnPage, dispatch) => {
// debugger
    axios.post('http://127.0.0.1:8000/api/V1/patients/find', 
    {
        personal_code: searching,
        page_number: currentPage,
        users_count_on_page: usersCountOnPage
        
    })
.then(
    dispatch(RequestToApiActionCreator(true)),
    dispatch(ResponseFromApiActionCreator(false))
)
.then(response => {   
    console.log(response)
    dispatch(ToggleLoadingAnimationActionCreator(false));
    dispatch(RequestToApiActionCreator(false));
    dispatch(ResponseFromApiActionCreator(true));
    if(response.data.data.length === 0) {
        dispatch(ResponseFromApiActionCreator(false));
    }else {
        dispatch(AxiosFindCurrentUsersActionCreator(response.data.data, response.data.foundUsersCount));
    }
    
})
}
export default SetLoginDataToApi;