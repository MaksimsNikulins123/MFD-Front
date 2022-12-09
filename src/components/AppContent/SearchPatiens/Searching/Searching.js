import Preloader from './Preloader/Preloader';
import SearchingResultApiContainer from './SearchingResult/SearchingResultApiContainer';



const Searching = (props) => {
debugger
    return(
            <>
                {
                props.response 
                // props.request 
                    ? 
                <SearchingResultApiContainer />
                    : 
                <Preloader /> 
                }
            </>
    )
}

export default Searching