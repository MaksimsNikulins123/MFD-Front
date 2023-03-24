import { connect } from "react-redux"
import { toggleFormActionCreator } from "../../../../../../redux/auth-reducer";
import { HandleLoginInputThunkCreator } from "../../../../../../redux/thunks/HandleLoginInputThunkCreator";
import LoginFormBody from "./LoginFormBody";

const mapStateToProps = (state) => {
    return {
        // loading: state.auth.loading
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleForm: () => {
            dispatch(toggleFormActionCreator())
        },
        handleLoginInput: (email, password) => {
            // dispatch(HandleInputValueActionCreator(inputValue));
            dispatch(HandleLoginInputThunkCreator(email, password))

        }
    }
}

const LoginFormBodyContainer = connect(mapStateToProps, mapDispatchToProps)(LoginFormBody)

export default LoginFormBodyContainer