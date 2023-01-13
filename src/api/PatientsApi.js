import { useEffect } from 'react';
import axios from "axios";
import { AxiosFindCurrentUsersActionCreator } from '../redux/search-reducer';

const PatientsApi = {
    FindPatients(searching, currentPage, usersCountOnPage, dispatch) {
               useEffect(() => {
                    axios.post('http://127.0.0.1:8000/api/V1/patients/find', 
                        {
                            personal_code: searching,
                            page_number: currentPage,
                            users_count_on_page: usersCountOnPage
                        })
                    .then(response => {  
                        dispatch(AxiosFindCurrentUsersActionCreator(response.data.data, response.data.foundUsersCount));
                    })
                    });
          }
        }
export default PatientsApi;