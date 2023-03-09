import { connect } from 'react-redux';
import { ChangeCurrentPageToBackActionCreator, ChangeCurrentPageToNextActionCreator, ChangeCurrentPageToPreviousActionCreator } from '../../../../../../redux/search-reducer';
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
        changeCurrentPageToPrevious: (currentPage, pagesAll, searching, usersCountOnPage) => {
            console.log(currentPage)
            dispatch(ChangeCurrentPageToPreviousActionCreator())
            console.log(currentPage)
            // dispatch(ToggleToPreviousPageThunkCreator(currentPage, pagesAll,  searching,  usersCountOnPage))
        },
        changeCurrentPageToNext: (currentPage, pagesAll, searching, usersCountOnPage) => {
            console.log(currentPage)
            // dispatch(ToggleToNextPageThunkCreator(currentPage, pagesAll, searching, usersCountOnPage))
            dispatch(ChangeCurrentPageToNextActionCreator())
            console.log(currentPage)

        }
    }
}

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);

export default PaginationContainer;