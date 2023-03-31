import FoundContainer from './Found/FoundContainer';
import NotFound from './NotFound/NotFound';
import PaginationContainer from './Pagination/PaginationContainer';

const SearchingResult = (props) => {
    // debugger
    return(
            <>
                {
                props.response
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