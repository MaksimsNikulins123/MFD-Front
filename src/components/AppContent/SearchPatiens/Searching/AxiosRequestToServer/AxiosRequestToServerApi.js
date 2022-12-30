import { useState, useEffect } from 'react';
import axios from "axios";

const AxiosRequestToServerApi = (props) => {

    console.log(props.searching)
    props.findPatiensThunkCreator(props.searching, props.currentPage, props.usersCountOnPage);
    // useEffect(() => {
    //     let searching = props.searching;
    //     axios.post('http://127.0.0.1:8000/api/V1/patients/find', 
    //         {
    //             personal_code: searching,
    //             page_number: props.currentPage,
    //             users_count_on_page: props.usersCountOnPage
    //         })
    //     .then(response => {
    //         console.log(response)
    //         props.axiosFindCurrentUsers(response.data.data, response.data.foundUsersCount)
    //     })
    //     }, []);
  
        return (
            <>
            </>
        )
  };

  export default AxiosRequestToServerApi;