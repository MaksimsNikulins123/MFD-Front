import styles from './Logout.module.scss';

const LogoutButton = (props) => {

    const logout = () => {
        props.logout(!props.isAuth)
    }

    return(
        <div className={styles.logout}>
               <input type="button" value='Log out' onClick={logout}/>
        </div>
    )
}
export default LogoutButton;