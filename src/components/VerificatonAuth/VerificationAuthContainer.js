import { connect } from 'react-redux';
import { compose } from 'redux';
import { GetAuthStatusActionCreator, IsAuthActionCreator } from '../../redux/auth-reducer';
import VerificationAuth from './VerificationAuth';


const mapStateToProps = (state) => {
    return {
        authStatus: state.auth.authStatus
        // isAuth: state.auth.isAuth,
        // loading: state.auth.loading
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return { 
        GetAuthStatus: (value) => {dispatch(GetAuthStatusActionCreator(value))},
        IsAuth: (value) => {dispatch(IsAuthActionCreator(value))}
    }
}

const VerificationAuthContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(VerificationAuth)


export default VerificationAuthContainer