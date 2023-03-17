import { connect } from "react-redux"
import { HandleLoginInputThunkCreator } from "../../../../../../redux/thunks/HandleLoginInputThunkCreator"
import LoginForm from './../AuthBody/LoginForm';

const mapStateToProps = (state) => {
    return {
        
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleLoginInput: (login, email) => {
            // dispatch(HandleInputValueActionCreator(inputValue));
            dispatch(HandleLoginInputThunkCreator(login, email))

        }
    }
}

const AuthBodyContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

export default AuthBodyContainer