import { connect } from 'react-redux';
import { AxiosGetAllUsersActionCreator } from '../../../../../redux/search-reducer';
import AxiosRequestToServerApi from './AxiosRequestToServerApi';
// import FoundApi from './AxiosRequestToServerApi';
// import SearchingResultApi from './FoundApi';

const mapStateToProps = (state) => {
    // debugger
    return {
        // searchResult: state.search.searchResult,
        request: state.search.request,
        response: state.search.response,
        searching: state.search.searching
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

const AxiosRequestToServerApiContainer = connect(mapStateToProps, mapDispatchToProps)(AxiosRequestToServerApi)

export default AxiosRequestToServerApiContainer;
