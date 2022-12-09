import { connect } from 'react-redux';
import { AxiosGetAllUsersActionCreator } from '../../../../../redux/search-reducer';
import SearchingResultApi from './SearchingResultApi';

const mapStateToProps = (state) => {
    // debugger
    return {
        searchResult: state.search.searchResult,
        request: state.search.request,
        response: state.search.response
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        axiosGetAllUsers: (allUsers) => {
            dispatch(AxiosGetAllUsersActionCreator(allUsers))
        }
        // handleSearchInput: (inputValue) => {
        //     dispatch(HandleInputValueActionCreator(inputValue));
        // }
    }
}

const SearchingResultApiContainer = connect(mapStateToProps, mapDispatchToProps)(SearchingResultApi)

export default SearchingResultApiContainer;
