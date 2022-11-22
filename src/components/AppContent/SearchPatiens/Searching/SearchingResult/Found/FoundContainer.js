import { connect } from 'react-redux';
import Found from './Found';

const mapStateToProps = (state) => {
    // debugger
    return {
        searchResult: state.search.searchResult
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const FoundContainer = connect(mapStateToProps, mapDispatchToProps)(Found);

export default FoundContainer;