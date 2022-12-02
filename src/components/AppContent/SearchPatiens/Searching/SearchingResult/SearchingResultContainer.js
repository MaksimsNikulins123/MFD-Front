import { connect } from 'react-redux';
import SearchingResult from './SearchingResult';

const mapStateToProps = (state) => {
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