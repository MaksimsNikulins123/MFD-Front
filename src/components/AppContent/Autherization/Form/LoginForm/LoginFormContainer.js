import { connect } from "react-redux"
import { toggleFormActionCreator } from "../../../../../redux/auth-reducer";
import { HandleLoginInputThunkCreator } from "../../../../../redux/thunks/HandleLoginInputThunkCreator";

import LoginForm from './LoginForm';

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        // toggleForm: () => {
        //     dispatch(toggleFormActionCreator())
        // },
        // handleLoginInput: (login, email) => {
        //     // dispatch(HandleInputValueActionCreator(inputValue));
        //     dispatch(HandleLoginInputThunkCreator(login, email))

        // }
    }
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

export default LoginFormContainer