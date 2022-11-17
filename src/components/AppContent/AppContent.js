import FormForNewPatients from './FormForNewPatiens/FormForNewPatients';
// import SearchPatients from './SearchPatiens/SearchPatients';
import styles from './AppContent.module.scss';
import SearchPatientsContainer from './SearchPatiens/SearchPatientsContainer';

const AppContent = (props) => {
// debugger
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                {<SearchPatientsContainer
                // search={props.state.search}
                // dispatch={props.dispatch}
                />}
                {/* {<FormForNewPatients 
                // form={props.state.form}
                // dispatch={props.dispatch}
                />} */}
            </div>   
        </div>
    )
}

export default AppContent