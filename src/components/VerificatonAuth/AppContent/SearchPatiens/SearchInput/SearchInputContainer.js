import SearchInput from './SearchInput';
import { connect } from 'react-redux';
import { HandleInputThunkCreator } from '../../../../../redux/thunks/HandleInputThunkCreator';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        searching: state.search.searching,
        currentPage: state.search.currentPage,
        usersCountOnPage: state.search.usersCountOnPage
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        handleSearchInput: (inputValue, currentPage, usersCountOnPage) => {
            dispatch(HandleInputThunkCreator(inputValue, currentPage, usersCountOnPage))

        }
    }
}

const SearchInputContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SearchInput)

export default SearchInputContainer