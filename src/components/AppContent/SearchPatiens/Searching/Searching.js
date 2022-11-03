import Preloader from './Preloader/Preloader';
import SearchingResult from './SearchingResult/SearchingResult';


const Searching = (props) => {

    return(
            <>
                {
                props.response 
                    ? 
                <Preloader /> 
                    : 
                <SearchingResult 
                    searchResult={props.searchResult}
                /> 
                }
            </>
    )
}

export default Searching