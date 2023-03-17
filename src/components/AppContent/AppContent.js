// import FormForNewPatients from './FormForNewPatiens/FormForNewPatients';
import styles from './AppContent.module.scss';
import SearchPatientsContainer from './SearchPatiens/SearchPatientsContainer';
import FormForNewPatientsContainer from './FormForNewPatiens/FormForNewPatientsContainer';
import Autherization from './Autherization/Autherization';

const AppContent = (props) => {

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <>
                    {
                        props.isAuth
                        ?
                        <>
                            <SearchPatientsContainer />
                            <FormForNewPatientsContainer />
                    
                        </>
                        :

                        <Autherization />

                    }
                    
                </>
                
            </div>   
        </div>
    )
}

export default AppContent