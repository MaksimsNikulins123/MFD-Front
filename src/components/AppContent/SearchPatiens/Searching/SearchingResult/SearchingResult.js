// import Found from './Found/Found';
import FoundContainer from './Found/FoundContainer';
import NotFound from './NotFound/NotFound';
import PaginationContainer from './Pagination/PaginationContainer';

const SearchingResult = (props) => {
    // debugger
    return(
            <>
                {
                props.searchResult.length > 0
                    ?
                <>
                    <FoundContainer />
                    <PaginationContainer />
                </>
                    :
                <NotFound />
                } 
            </>
    )
}

export default SearchingResult