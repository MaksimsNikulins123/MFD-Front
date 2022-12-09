import { connect } from 'react-redux';
import { ChangeCurrentPageToBackActionCreator, ChangeCurrentPageToNextActionCreator } from '../../../../../../redux/search-reducer';
import Pagination from './Pagination';


const mapStateToProps = (state) => {
    // debugger
    return {
        usersTotalCount: state.search.usersTotalCount,
        usersCountOnPage: state.search.usersCountOnPage,
        pagesAll: state.search.pagesAll,
        currentPage: state.search.currentPage
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentPageToBack: () => {
            dispatch(ChangeCurrentPageToBackActionCreator())
        },
        changeCurrentPageToNext: () => {
            dispatch(ChangeCurrentPageToNextActionCreator())
        }
    }
}

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);

export default PaginationContainer;