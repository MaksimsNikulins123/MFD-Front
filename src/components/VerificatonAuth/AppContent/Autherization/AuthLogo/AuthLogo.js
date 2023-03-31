import logo from './../../../../../MDF.svg';
import styles from './AuthLogo.module.scss';

const AuthLogo = () => {

    return(
            <div className={styles.picture}>
                <img src={logo} alt="Logo" />
            </div>               
    )
}
export default AuthLogo