import axios from 'axios';
import { useState, useEffect } from 'react';
import Preloader from './Preloader/Preloader';
import AppContentContainer from './AppContent/AppContentContainer';



const VerificationAuth = (props) => {

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/V1/patients/authStatus')
    .then(response => {

      setLoading(false)
   
      props.IsAuth(response.data.isAuth)
    })
  },[props])
  return (
    <>
    {
      isLoading
      ?
      <Preloader />
      :
      <AppContentContainer />
    }
      
      
    </>
  );
}

export default VerificationAuth;