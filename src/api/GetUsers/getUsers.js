import { useState, useEffect } from 'react';
import axios from "axios";

// const GetUsers = () => {
// debugger    
    // const [data, setData] = useState([]);
    
    // const getData = async () => {
        
    //     const data  = await axios.get(`http://127.0.0.1:8000/api/V1/patients/`);
    //     // console.log(data)
    //     setData(data);
    // };
    // const getData = () => {
    //     console.log("123")
    // }
  
    // useEffect(() => {
    //     getData();
    //     }, []);

//   return {data};
   

    // return data
// }

const GetUsers = () => {
    const [data, setData] = useState(null);
    // const [error, setError] = useState("");
    // const [loaded, setLoaded] = useState(false);
  
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/V1/patients/`)
        .then(response => response.json())
        .then(json => {
            setData(json)
        })
        }, []);
  
    // return { data, error, loaded };
  };

  export default GetUsers;
