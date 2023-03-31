import { connect } from "react-redux"
import { toggleFormActionCreator } from "../../../../../../../redux/auth-reducer";
import { HandleLoginInputThunkCreator } from "../../../../../../../redux/thunks/HandleLoginInputThunkCreator";
import LoginFormBody from "./LoginFormBody";
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleForm: () => {
            dispatch(toggleFormActionCreator())
        },
        handleLoginInput: (email, password) => {
            dispatch(HandleLoginInputThunkCreator(email, password))

        }
    }
}

const LoginFormBodyContainer = compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LoginFormBody) 

export default LoginFormBodyContainer