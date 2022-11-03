import Found from './Found/Found';
import NotFound from './NotFound/NotFound';

const SearchingResult = (props) => {

    return(
            <>
                {
                props.searchResult.length > 0
                    ?
                <Found 
                    searchResult={props.searchResult}
                />
                    :
                <NotFound />
                } 
            </>
    )
}

export default SearchingResult