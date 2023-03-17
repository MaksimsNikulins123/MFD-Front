import { connect } from 'react-redux'
import AppContent from './AppContent'


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        loading: state.auth.loading
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const AppContentContainer = connect(mapStateToProps, mapDispatchToProps)(AppContent)

export default AppContentContainer