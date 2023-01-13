import { connect } from 'react-redux';
import { FindPatiensThunkCreator } from '../../../../../redux/thunks/FindPatientsThunkCreator';
// import FindPatients from '../../../../../api/FindPatients';
// import PatientsApi from '../../../../../api/PatientsApi';
// import { FindPatiensThunkCreator} from '../../../../../redux/search-reducer';
import AxiosRequest from './AxiosRequest';
// import AxiosRequestToServerApi from './AxiosRequestToServerApi';

const mapStateToProps = (state) => {

    return {
        // request: state.search.request,
        // response: state.search.response,
        searching: state.search.searching,
        currentPage: state.search.currentPage,
        usersCountOnPage: state.search.usersCountOnPage
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        findPatiens: (searching, currentPage, usersCountOnPage) => {
            dispatch(FindPatiensThunkCreator(searching, currentPage, usersCountOnPage))
        },
    }
}

const AxiosRequestContainer = connect(mapStateToProps, mapDispatchToProps)(AxiosRequest)
// const AxiosRequestToServerApiContainer = connect(mapStateToProps, mapDispatchToProps)(PatientsApi.findPatients())

export default AxiosRequestContainer;
