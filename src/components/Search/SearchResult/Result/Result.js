import styles from './Result.module.scss'

const Result = (props) => {

    const patients = props.gettedApiPatientsData;
         
    const patientList = patients.map((patient) =>
    <li key={patient.id}>
        <table >
            <tbody>
                
                <tr>
                <td >
                    {patient.created_at}
                </td>
                <td >
                    {patient.personal_code}
                </td>
                <td>
                    {patient.name}
                </td>
                <td>
                    {patient.surname}
                </td>
                <td>
                    <button className={styles.button + " " + "btn btn-warning"}>
                        Delete
                    </button>
                    <button className={styles.button + " " + "btn btn-danger"}>
                        Delete
                    </button>
                </td>
                </tr>
                
            </tbody>
        </table >
    </li>
    
        );

    return(
      <>
    <table>
        <tbody>
            <tr>
                <th>Pievienots</th>
                <th>Personas kods</th>
                <th>Vārds</th>
                <th>Uzvārds</th>
                <th>Ierakstu dzešana</th>
            </tr>
        </tbody>                            
    </table>
        {patientList}
        
    
    
    </>
    )
}

export default Result