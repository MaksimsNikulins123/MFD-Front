import { useState, useEffect } from 'react';
import axios from "axios";
import FindPatients from './FindPatients';

const PatientsApi = {
    findPatients(searching, currentPage, usersCountOnPage) {

        console.log("findPatients" + " " + searching + " " + currentPage + " " + usersCountOnPage)
        FindPatients(searching, currentPage, usersCountOnPage);
        // let object = {};
        // return object = {
        //     searching: searching, 
        //     currentPage: currentPage,
        //     usersCountOnPage: usersCountOnPage
        // }
        // useEffect(() => {
        //     // let searching = props.searching;
        //     axios.post('http://127.0.0.1:8000/api/V1/patients/find', 
        //         {
        //             personal_code: searching,
        //             page_number: currentPage,
        //             users_count_on_page: usersCountOnPage
        //         })
        //     .then(response => {
        //         console.log(response)
        //         // props.axiosFindCurrentUsers(response.data.data, response.data.foundUsersCount)
        //     })
        //     }, []);
      
            // return (
            //     <>
            //     </>
            // )
    }


}
export default PatientsApi;