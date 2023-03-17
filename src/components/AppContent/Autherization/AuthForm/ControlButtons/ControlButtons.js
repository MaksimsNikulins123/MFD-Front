import styles from './ControlButtons.module.scss';

const ControlButtons = (props) => {

    const openRegistrationForm = () => {

    } 

    const openLoginForm = () => {
        
    }

    return(
        <div className={styles.buttons}>
            <input type='button' value='registration' onClick={openRegistrationForm}/>
            <input type='button' value='login' onClick={openLoginForm}/>
        </div>
    )
}

export default ControlButtons;