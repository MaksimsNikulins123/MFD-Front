// import Preloader from './Preloader/Preloader';
import Searching from './Searching';
// import SearchingResult from './SearchingResult/SearchingResult';
import { connect } from 'react-redux';


// const SearchingContainer = (props) => {

//     return(
//             <>
//                 {
//                 props.response 
//                     ? 
//                 <SearchingResult 
//                 searchResult={props.searchResult}
//                 />
//                     : 
//                 <Preloader /> 
//                 }
//             </>
//     )
// }

const mapStateToProps = (state) => {
    return {
        response: state.search.response
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const SearchingContainer = connect(mapStateToProps, mapDispatchToProps)(Searching);

export default SearchingContainer