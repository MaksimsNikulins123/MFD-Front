// import FormForNewPatients from './FormForNewPatiens/FormForNewPatients';
import styles from './AppContent.module.scss';
import SearchPatientsContainer from './SearchPatiens/SearchPatientsContainer';
import FormForNewPatientsContainer from './FormForNewPatiens/FormForNewPatientsContainer';
import AutherizationContainer from './Autherization/AutherizationContainer';

const AppContent = (props) => {

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <>
                    {
                        props.auth
                        ?
                        <>
                            <SearchPatientsContainer />
                            <FormForNewPatientsContainer />
                        </>
                        :

                        <AutherizationContainer />

                    }
                    
                </>
                
            </div>   
        </div>
    )
}

export default AppContent