import styles from './Found.module.scss';


const Found = (props) => {

    let foundPatientList = props.searchResult.map((patient) => {
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
                            <button className={styles.buttonHide}>Hide</button>
                            <button className={styles.buttonDelete}>Delete</button>
                        </div> 
                    </div>
                </li>
        )         
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
                        Ierakstu dzešana
                    </div>
                </div>
                {foundPatientList}   
            </div>
        </div>
    )
}

export default Found