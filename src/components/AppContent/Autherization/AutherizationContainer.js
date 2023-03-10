import { connect } from 'react-redux'
import Autherization from './Autherization'


const mapStateToProps = (state) => {
    return {
        auth: state.search.auth,
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const AutherizationContainer = connect(mapStateToProps, mapDispatchToProps)(Autherization)

export default AutherizationContainer