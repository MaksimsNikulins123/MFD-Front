import { useState, useEffect } from 'react';
import axios from "axios";
// import SearchingResultContainer from '../SearchingResultContainer';
// import FoundContainer from '../SearchingResult/Found/FoundContainer';

const AxiosRequestToServerApi = (props) => {
// debugger
    // const [data, setData] = useState(props.searchResult);
    // const [request, setRequest] = useState(props.request);
    // const [response, setResponse] = useState(props.response);
    // const [loaded, setLoaded] = useState(false);
    console.log(props.searching)
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/V1/patients/${props.searching}`)
        .then(response => {
            console.log(response.data.data)
            props.axiosGetAllUsers([response.data.data])
        })
        }, []);


    // useEffect(() => {
    //     axios.get(`http://127.0.0.1:8000/api/V1/patients/`)
    //     .then(response => {
    //         console.log(response.data.data)
    //         props.axiosGetAllUsers(response.data.data)
    //     })
    //     }, []);
  
        return (
            <>
            </>
        )
  };

  export default AxiosRequestToServerApi;