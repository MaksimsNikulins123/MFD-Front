import {HandleInputValueActionCreator} from '../../../../redux/search-reducer';
import SearchInput from './SearchInput';
import { connect } from 'react-redux';
import { HandleInputThunkCreator } from './../../../../redux/thunks/HandleInputThunkCreator';

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
            // dispatch(HandleInputValueActionCreator(inputValue));
            dispatch(HandleInputThunkCreator(inputValue, currentPage, usersCountOnPage))

        }
    }
}

const SearchInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput)

export default SearchInputContainer