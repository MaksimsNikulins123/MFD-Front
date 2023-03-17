import styles from './LoginForm.module.scss';


const LoginForm = (props) => {

    const handleLoginInput = (e) => {
        e.preventDefault();
        let login = e.target.login.value;
        let email = e.target.email.value;
            // props.handleSearchInput(inputValue)
            props.handleLoginInput(login, email)
    }

    return(
       
                    <div className={styles.login}>
                        <form className={styles.form} onSubmit={handleLoginInput}>
                            <div className={styles.input}>
                                <label>Login:</label>
                                    <input type="text" id={'login'} name='login' />
                                
                            </div>
                            <div className={styles.input}>
                                <label>E-mail:</label>
                                <input type="email" id={'email'} name='email' />
                                
                            </div>
                            <div className={styles.submit}>
                                <input type="submit" value="Submit" />
                            </div>
                       
                        </form>
                    </div>
           
    )
}
export default LoginForm