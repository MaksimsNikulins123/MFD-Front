import styles from './Autherization.module.scss';
import FormContainer from './Form/FormContainer';
import AuthLogo from "./AuthLogo/AuthLogo"


const Autherization = () => {
 
     return(
            <div className={styles.container}>
                <div className={styles.title}> 
                    <h1>MFD veselības grupa</h1> 
                </div>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <AuthLogo />
                    </div>
                    <div className={styles.form}>
                        <FormContainer />
                    </div>
                </div>
                <div className={styles.footer}>
                    <h6>Copyright © 2023 Maksim Nikulin</h6>
                </div>
            </div>
    )
}

export default Autherization