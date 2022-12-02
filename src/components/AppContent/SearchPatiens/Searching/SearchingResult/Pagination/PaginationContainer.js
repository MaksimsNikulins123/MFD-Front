import { connect } from 'react-redux';
import { Pagination } from 'reactstrap';


const mapStateToProps = (state) => {
    // debugger
    return {
        // searchResult: state.search.searchResult
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        // hidePatientInfo: (patientIdToHide) => {
        //     dispatch(HidePatientInfoActionCreator(patientIdToHide));
        // }
    }
}

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);

export default PaginationContainer;