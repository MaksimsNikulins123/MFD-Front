import { connect } from 'react-redux';
import { compose } from 'redux';
import SearchingResult from './SearchingResult';

const mapStateToProps = (state) => {
    return {
        response: state.search.response,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const SearchingResultContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SearchingResult) 

export default SearchingResultContainer;