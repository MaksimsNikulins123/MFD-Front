
import styles from './AppContent.module.scss';
import Autherization from './Autherization/Autherization';
import FormForNewPatientsContainer from './FormForNewPatiens/FormForNewPatientsContainer';
import SearchPatientsContainer from './SearchPatiens/SearchPatientsContainer';



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