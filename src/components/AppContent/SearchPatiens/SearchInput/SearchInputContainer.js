import {HandleInputValueActionCreator} from '../../../../redux/search-reducer';
import SearchInput from './SearchInput';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        searching: state.search.searching
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        handleSearchInput: (inputValue) => {
            dispatch(HandleInputValueActionCreator(inputValue));
        }
    }
}

const SearchInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput)

export default SearchInputContainer