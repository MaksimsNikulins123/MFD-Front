// import Found from './Found/Found';
import FoundContainer from './Found/FoundContainer';
import NotFound from './NotFound/NotFound';

const SearchingResult = (props) => {
// debugger
    return(
            <>
                {
                props.searchResult.length > 0
                    ?
                <FoundContainer />
                    :
                <NotFound />
                } 
            </>
    )
}

export default SearchingResult