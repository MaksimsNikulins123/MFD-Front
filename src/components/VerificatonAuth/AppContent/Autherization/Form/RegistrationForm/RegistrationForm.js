import styles from './RegistrationForm.module.scss';


const RegistrationForm = (props) => {

    const handleRegistrationInput = (e) => {
        e.preventDefault();
        let firstname = e.target.firstname.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        props.handleRegistrationInput(firstname, email, password)
    }

    const openRegistrationForm = () => {
        props.toggleForm()
    } 

    return(
        <div className={styles.registrationForm}>
            <div className={styles.buttons}>
                <input type='button' value='Login' onClick={openRegistrationForm}/> 
            </div>
                    <div className={styles.registration}>
                        <form className={styles.form} onSubmit={handleRegistrationInput}>
                            <div className={styles.input}>
                                <label>Login:</label>
                                    <input type="text" id={'firstname'} name='firstname' />
                                
                            </div>
                            <div className={styles.input}>
                                <label>E-mail:</label>
                                <input type="email" id={'email'} name='email' />
                                
                            </div>
                            <div className={styles.input}>
                                <label>E-mail:</label>
                                <input type="email" id={'password'} name='password' />
                                
                            </div>
                            <div className={styles.submit}>
                                <input type="submit" value="Submit" />
                            </div>
                       
                        </form>
                    </div>
        </div>
        
           
    )
}
export default RegistrationForm