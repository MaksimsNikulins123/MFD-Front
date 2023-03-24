import Preloader from '../../../SearchPatiens/Searching/Preloader/Preloader';
import styles from './LoginForm.module.scss';
import LoginFormBodyContainer from './LoginFormBody/LoginFormBodyContainer';


const LoginForm = (props) => {

    

    return(
        <div className={styles.loginForm}>
            {
                props.loading
                ?
                <Preloader />
                :
                <LoginFormBodyContainer />
            }
  
        </div>
        
           
    )
}
export default LoginForm