import FormForNewPatients from './FormForNewPatiens/FormForNewPatients';
// import SearchPatients from './SearchPatiens/SearchPatients';
import styles from './AppContent.module.scss';
import SearchPatientsContainer from './SearchPatiens/SearchPatientsContainer';

const AppContent = () => {

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                {<SearchPatientsContainer />}
                {/* {<FormForNewPatients 
                // form={props.state.form}
                // dispatch={props.dispatch}
                />} */}
            </div>   
        </div>
    )
}

export default AppContent