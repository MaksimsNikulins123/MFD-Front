import { connect } from 'react-redux';
import { HidePatientInfoActionCreator } from '../../../../../../redux/search-reducer';
import Found from './Found';

const mapStateToProps = (state) => {
    // debugger
    return {
        searchResult: state.search.searchResult
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        hidePatientInfo: (patientIdToHide) => {
            dispatch(HidePatientInfoActionCreator(patientIdToHide));
        }
    }
}

const FoundContainer = connect(mapStateToProps, mapDispatchToProps)(Found);

export default FoundContainer;