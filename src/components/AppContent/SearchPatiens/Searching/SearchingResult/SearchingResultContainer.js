import { connect } from 'react-redux';
import SearchingResult from './SearchingResult';
// import Found from './Found/Found';
// import NotFound from './NotFound/NotFound';

// const SearchingResult = () => {

//     return(
//             <>
//                 {
//                 props.searchResult.length > 0
//                     ?
//                 <Found 
//                     searchResult={props.searchResult}
//                 />
//                     :
//                 <NotFound />
//                 } 
//             </>
//     )
// }
const mapStateToProps = (state) => {
    // debugger
    return {
        searchResult: state.search.searchResult
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const SearchingResultContainer = connect(mapStateToProps, mapDispatchToProps)(SearchingResult)

export default SearchingResultContainer;