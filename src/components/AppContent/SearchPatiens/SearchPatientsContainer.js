import { connect } from 'react-redux'
import SearchPatients from "./SearchPatients"

const mapStateToProps = (state) => {
// debugger
    return {
        searching: state.search.searching,
        // response: state.search.response,
        // searchResult: state.search.searchResult
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const SearchPatientsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchPatients)

export default SearchPatientsContainer