// import FormForNewPatients from './FormForNewPatiens/FormForNewPatients';
import styles from './AppContent.module.scss';
import SearchPatientsContainer from './SearchPatiens/SearchPatientsContainer';
import FormForNewPatientsContainer from './FormForNewPatiens/FormForNewPatientsContainer';

const AppContent = () => {

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                {<SearchPatientsContainer />}
                {<FormForNewPatientsContainer />}
            </div>   
        </div>
    )
}

export default AppContent