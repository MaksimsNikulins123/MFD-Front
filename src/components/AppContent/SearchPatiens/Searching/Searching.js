import AxiosRequestToServerApiContainer from './AxiosRequestToServer/AxiosRequestToServerApiContainer';
import Preloader from './Preloader/Preloader';
// import SearchingResultApiContainer from './SearchingResult/SearchingResultApiContainer';
import SearchingResultContainer from './SearchingResult/SearchingResultContainer';



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
                        <AxiosRequestToServerApiContainer />
                        :
                        <Preloader />
                    }  
                </>
               
                }
            </>
    )
}

export default Searching