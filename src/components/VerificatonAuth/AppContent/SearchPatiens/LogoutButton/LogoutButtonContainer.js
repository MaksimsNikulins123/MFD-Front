import { connect } from 'react-redux'
import { compose } from 'redux'
import { LogoutActionCreator } from '../../../../../redux/auth-reducer'
import LogoutButton from './LogoutButton'


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: (value) => {
            dispatch(LogoutActionCreator(value))
        }
    }
}

const LogoutButtonContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LogoutButton) 

export default LogoutButtonContainer
