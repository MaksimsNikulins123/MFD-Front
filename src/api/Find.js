import { useState, useEffect } from 'react';
import axios from "axios";

const Find = (searching, currentPage, usersCountOnPage) => {
// return
// console.log("Find " + searching)
    // console.log(props.searching)
    useEffect(() => {
        // let searching = searching;
        axios.post('http://127.0.0.1:8000/api/V1/patients/find', 
            {
                personal_code: searching,
                page_number: currentPage,
                users_count_on_page: usersCountOnPage
            })
        .then(response => {
            console.log(response)
            // props.axiosFindCurrentUsers(response.data.data, response.data.foundUsersCount)
        })
        }, []);
  
        return (
            <>
            </>
        )
  };

  export default Find;