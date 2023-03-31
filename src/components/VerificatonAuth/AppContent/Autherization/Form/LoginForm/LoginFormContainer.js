import { connect } from "react-redux"
import { compose } from "redux";
import LoginForm from './LoginForm';

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const LoginFormContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LoginForm) 

export default LoginFormContainer