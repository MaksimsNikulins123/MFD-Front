import FormForNewPatients from './FormForNewPatiens/FormForNewPatients';
import SearchPatients from './SearchPatiens/SearchPatients';
import styles from './AppContent.module.scss';

const AppContent = (props) => {
// debugger
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                {<SearchPatients 
                search={props.state.search}
                dispatch={props.dispatch}
                />}
                {<FormForNewPatients 
                form={props.state.form}
                />}
            </div>   
        </div>
    )
}

export default AppContent