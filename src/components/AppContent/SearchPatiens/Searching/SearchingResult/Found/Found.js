import styles from './Found.module.scss';


const Found = (props) => {
// debugger
    const hideAction = (e) => {
            let patientIdToHide = e.target.id; 
            props.hidePatientInfo(patientIdToHide)
        }
    const deleteAction = (e) => {
            let patientIdToDelete = e.target.id; 
            console.log("delete " + patientIdToDelete)  
        }

    let foundPatientList = props.searchResult.map((patient) => {
        // console.log(props.searchResult)
        // console.log(patient)
        if(patient.hide) {
            return null
        }else {
            return (
                <li key={patient.id}>
                    <div className={styles.listItemTitle}>
                        {patient.created_at}
                    </div>
                    <div className={styles.listItemTitle}>
                        {patient.personal_code}
                    </div>
                    <div className={styles.listItemTitle}>
                        {patient.name}
                    </div>
                    <div className={styles.listItemTitle}>
                        {patient.surname}
                    </div>
                    <div className={styles.listItemTitle}>
                        <div className={styles.buttons}>
                            <button className={styles.buttonHide} id={patient.id} onClick={hideAction}>
                                Hide
                            </button>
                        </div> 
                    </div>
                    <div className={styles.listItemTitle}>
                        <div className={styles.buttons}>
                            <button className={styles.buttonDelete} id={patient.id} onClick={deleteAction}>
                                Delete
                            </button>
                        </div> 
                    </div>
                </li>
        )         
        }
        
    })

    return(  
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.table}>
                    <div className={styles.itemTitle}>
                        Pievienots
                    </div>
                    <div className={styles.itemTitle}>
                      Personas kods
                    </div>
                    <div className={styles.itemTitle}>
                         Vārds
                    </div>
                    <div className={styles.itemTitle}>
                        Uzvārds
                    </div>
                    <div className={styles.itemTitle}>
                        Slept
                    </div>
                    <div className={styles.itemTitle}>
                        Dzest
                    </div>
                </div>
                {foundPatientList}   
            </div>
        </div>
    )
}

export default Found