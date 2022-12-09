import { useState, useEffect } from 'react';
import axios from "axios";
import SearchingResultContainer from './SearchingResultContainer';

const SearchingResultApi = (props) => {
// debugger
    // const [data, setData] = useState(props.searchResult);
    const [request, setRequest] = useState(props.request);
    // const [response, setResponse] = useState(props.response);
    // const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/V1/patients/`)
        .then(response => {
            console.log(response.data.data)
            setRequest(false);
            // return response.data.data
            // setData(response.data.data)
            props.axiosGetAllUsers(response.data.data)
        })
        // .then(response => {
        //     console.log(response)
        //     // setRequest(false)
        //     // setResponse(true)
        //     // setData(response)
        // })
        }, [request]);
  
        return (
            <SearchingResultContainer />
        )
  };

  export default SearchingResultApi;