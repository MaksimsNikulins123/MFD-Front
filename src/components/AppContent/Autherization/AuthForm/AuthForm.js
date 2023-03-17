import styles from './AuthForm.module.scss';
import ControlButtonsContainer from './ControlButtons/ControlButtonsContainer';
import FormContainer from './Form/FormContainer';

const AuthForm = (props) => {

    return(
        <div className={styles.authForm}>
            <ControlButtonsContainer />
            <FormContainer /> 
        </div>              
    )
}
export default AuthForm