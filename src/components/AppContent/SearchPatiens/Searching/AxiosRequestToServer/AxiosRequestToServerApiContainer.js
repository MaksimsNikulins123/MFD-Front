import { connect } from 'react-redux';
import { AxiosFindCurrentUsersActionCreator} from '../../../../../redux/search-reducer';
import AxiosRequestToServerApi from './AxiosRequestToServerApi';

const mapStateToProps = (state) => {

    return {
        request: state.search.request,
        response: state.search.response,
        searching: state.search.searching,
        currentPage: state.search.currentPage,
        usersCountOnPage: state.search.usersCountOnPage
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        axiosFindCurrentUsers: (currentUsers, totalCount) => {
            dispatch(AxiosFindCurrentUsersActionCreator(currentUsers, totalCount))
        }
    }
}

const AxiosRequestToServerApiContainer = connect(mapStateToProps, mapDispatchToProps)(AxiosRequestToServerApi)

export default AxiosRequestToServerApiContainer;
