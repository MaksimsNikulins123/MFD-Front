import { connect } from 'react-redux'
import AppContent from './AppContent'


const mapStateToProps = (state) => {
    return {
        auth: state.search.auth,
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const AppContentContainer = connect(mapStateToProps, mapDispatchToProps)(AppContent)

export default AppContentContainer