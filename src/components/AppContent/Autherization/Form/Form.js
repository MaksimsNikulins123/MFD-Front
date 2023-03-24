
// import styles from './Form.module.scss';
import LoginFormContainer from './LoginForm/LoginFormContainer';
import RegistrationFormContainer from './RegistrationForm/RegistrationFormContainer';


const Form = (props) => {
// debugger
    return(
        <>
            {
                props.toggleForm
                ?
                <RegistrationFormContainer />
                :
                <LoginFormContainer />
            }
           
        </>              
    )
}
export default Form