import AxiosRequestContainer from './AxiosRequestToServer/AxiosRequestContainer';
import Preloader from './Preloader/Preloader';
import SearchingResultContainer from './SearchingResult/SearchingResultContainer';
import App from './../../../../App';



const Searching = (props) => {
// debugger
    return(
            <>

                {
                props.response 
                    ? 
                <SearchingResultContainer />
                    : 
                    
                 <>
                    {
                        props.request
                        ?
                        <AxiosRequestContainer />
                        :
                        <Preloader />
                    }  
                </>
               
                
                }
            </>
    )
}

export default Searching