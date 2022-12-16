// import Found from './Found/Found';
// import FoundContainer from '../AxiosRequestToServer/Found/FoundContainer';
// import FoundApiContainer from './Found/FoundApiContainer';
// import FoundContainer from './Found/FoundContainer';
import FoundContainer from './Found/FoundContainer';
import NotFound from './NotFound/NotFound';
import PaginationContainer from './Pagination/PaginationContainer';

const SearchingResult = (props) => {
    // debugger
    return(
            <>
                {
                // props.searchResult.length > 0
                props.response
                // props.request
                    ?
                <>
                    {/* <FoundContainer /> */}
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