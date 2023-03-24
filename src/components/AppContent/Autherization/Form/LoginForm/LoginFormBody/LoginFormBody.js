import styles from './LoginFormBody.module.scss';

const LoginFormBody = (props) => {

    const handleLoginInput = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
            // props.handleSearchInput(inputValue)
            props.handleLoginInput(email, password)
    }

    const openRegistrationForm = () => {
        props.toggleForm()
    }
    return(
        <div className={styles.loginFormBody}>
        <div className={styles.buttons}>
                <input type='button' value='Registration' onClick={openRegistrationForm}/> 
            </div>
                    <div className={styles.form}>
                        <form  onSubmit={handleLoginInput}>
                            <div className={styles.input}>
                                <label>E-mail:</label>
                                    <input type="email" id={'email'} name='email' />
                                
                            </div>
                            <div className={styles.input}>
                                <label>Password:</label>
                                <input type="password" id={'password'} name='password' autoComplete="off"/>
                                
                            </div>
                            <div className={styles.submit}>
                                <input type="submit" value="Submit" />
                            </div>
                       
                        </form>
                    </div>
        </div>
            
    )
}
export default LoginFormBody