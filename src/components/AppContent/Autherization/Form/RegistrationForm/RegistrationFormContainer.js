import { connect } from "react-redux"
import { toggleFormActionCreator } from "../../../../../redux/auth-reducer";
import { HandleRegistrationInputThunkCreator } from "../../../../../redux/thunks/HandleRegistrationInputThunkCreator";

import RegistrationForm from "./RegistrationForm";

const mapStateToProps = (state) => {
    return {
        
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleForm: () => {
            dispatch(toggleFormActionCreator())
        },
        handleRegistrationInput: (firstname, email, password) => {
            // dispatch(HandleInputValueActionCreator(inputValue));
            dispatch(HandleRegistrationInputThunkCreator(firstname, email, password))

        }
    }
}

const RegistrationFormContainer = connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)

export default RegistrationFormContainer