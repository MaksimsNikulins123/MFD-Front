import Searching from './Searching';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    // debugger
    return {
        response: state.search.response
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const SearchingContainer = connect(mapStateToProps, mapDispatchToProps)(Searching);

export default SearchingContainer