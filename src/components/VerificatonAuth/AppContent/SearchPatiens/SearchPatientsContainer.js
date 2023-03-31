import { connect } from 'react-redux'
import { compose } from 'redux'
import SearchPatients from "./SearchPatients"

const mapStateToProps = (state) => {
    return {
        searching: state.search.searching,
     
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const SearchPatientsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SearchPatients) 

export default SearchPatientsContainer