import Searching from './Searching';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = (state) => {

    return {
        loading: state.search.loading
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const SearchingContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Searching)

export default SearchingContainer