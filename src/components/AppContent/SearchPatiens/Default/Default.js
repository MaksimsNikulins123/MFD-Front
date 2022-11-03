// import Found from './Found/Found';
// import NotFound from './NotFound/NotFound';
import styles from './Default.module.scss';


const Default = (props) => {

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    Start searching
                </div>
            </div>
        </div>
    )
}

export default Default