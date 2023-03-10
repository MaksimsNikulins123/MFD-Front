import { connect } from 'react-redux';
import { ToggleToNextPageThunkCreator } from '../../../../../../redux/thunks/ToggleToNextPageThunkCreator';
import Pagination from './Pagination';
import { ToggleToPreviousPageThunkCreator } from './../../../../../../redux/thunks/ToggleToPreviousPageThunkCreator';


const mapStateToProps = (state) => {
    // debugger
    return {
        searching: state.search.searching,
        usersCountOnPage: state.search.usersCountOnPage,
        pagesAll: state.search.pagesAll,
        currentPage: state.search.currentPage
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPageToPrevious: (currentPage, searching, usersCountOnPage) => {
            dispatch(ToggleToPreviousPageThunkCreator(currentPage, searching, usersCountOnPage))
        },
        changeCurrentPageToNext: (currentPage, pagesAll, searching, usersCountOnPage) => {
            dispatch(ToggleToNextPageThunkCreator(currentPage, pagesAll, searching, usersCountOnPage))
           

        }
    }
}

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);

export default PaginationContainer;