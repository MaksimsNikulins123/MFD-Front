import { connect } from 'react-redux';
// import FindPatients from '../../../../../api/FindPatients';
import PatientsApi from '../../../../../api/PatientsApi';
import { AxiosFindCurrentUsersActionCreator, FindPatiensThunkCreator} from '../../../../../redux/search-reducer';
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
        },
        findPatiensThunkCreator: (searching, currentPage, usersCountOnPage) => {
            dispatch(FindPatiensThunkCreator(searching, currentPage, usersCountOnPage))
        }
    }
}

const AxiosRequestToServerApiContainer = connect(mapStateToProps, mapDispatchToProps)(AxiosRequestToServerApi)
// const AxiosRequestToServerApiContainer = connect(mapStateToProps, mapDispatchToProps)(PatientsApi.findPatients())

export default AxiosRequestToServerApiContainer;
