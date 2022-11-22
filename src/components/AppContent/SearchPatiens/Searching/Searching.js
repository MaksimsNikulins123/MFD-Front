import Preloader from './Preloader/Preloader';
// import SearchingResult from './SearchingResult/SearchingResult';
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
                <Preloader /> 
                }
            </>
    )
}

export default Searching