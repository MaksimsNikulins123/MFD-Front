import { connect } from 'react-redux'
import SearchPatients from "./SearchPatients"

const mapStateToProps = (state) => {
    return {
        searching: state.search.searching
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const SearchPatientsContainer = connect(mapStateToProps, mapDispatchToProps)(SearchPatients)

export default SearchPatientsContainer