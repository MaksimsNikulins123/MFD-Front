import { useState, useEffect } from 'react';
import axios from "axios";
import { AxiosFindCurrentUsersActionCreator } from '../redux/search-reducer';

const FindPatients = (searching, currentPage, usersCountOnPage) => {

    console.log(searching)
    useEffect(() => {
        // let searching = props.searching;
        axios.post('http://127.0.0.1:8000/api/V1/patients/find', 
            {
                personal_code: searching,
                page_number: currentPage,
                users_count_on_page: usersCountOnPage
            })
        .then(response => {
            console.log(response)
            // AxiosFindCurrentUsersActionCreator(response.data.data, response.data.foundUsersCount)
        })
        }, []);
  
        return (
            <>
            </>
        )
  };

  export default FindPatients;