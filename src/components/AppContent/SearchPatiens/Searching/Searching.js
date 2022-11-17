import Preloader from './Preloader/Preloader';
import SearchingResult from './SearchingResult/SearchingResult';


const Searching = (props) => {

    return(
            <>
                {
                props.response 
                    ? 
                <SearchingResult 
                // searchResult={props.searchResult}
                />
                    : 
                <Preloader /> 
                }
            </>
    )
}

export default Searching