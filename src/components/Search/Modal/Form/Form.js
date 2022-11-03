import styles from './Form.module.scss';

const Form = (props) => {
 
    const getInput = (e) => {   
        props.handleInput(e)
        
    }

    return(
    <div className={styles.form_container}>
        <h2>Informācija par pacientu</h2>
        <table>
            <tbody>
                <tr>
                    <td>Datums</td>
                    <td className="date">
                        <input 
                        type="date"
                        name="date"
                        value={props.formData.date}
                        onChange={getInput}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        Vārds
                    </td>
                    <td>
                        <input type="text" 
                        name="name"
                        maxLength="50"
                        value={props.formData.name}
                        onChange={getInput}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        Uzvārds
                    </td>
                    <td>
                        <input 
                        type="text" 
                        maxLength="50"
                        name="surname"
                        value={props.formData.surname}
                        onChange={getInput}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        Personas kods
                    </td>
                    <td>
                        <input 
                        type="text" 
                        maxLength="12"
                        name="personal_code"
                        value={props.formData.personal_code}
                        onChange={getInput}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        Sūdzības un anamnēze
                    </td>
                    <td>
                        <input 
                        type="text" 
                        maxLength="2000"
                        name="sudzibas_un_anamneze"
                        value={props.formData.sudzibas_un_anamneze}
                        onChange={getInput}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        Blakus slimības
                    </td>
                    <td>
                        <input 
                        type="text" 
                        maxLength="300"
                        name="blakus_slimibas"
                        value={props.formData.blakus_slimibas}
                        onChange={getInput}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        Medikamentu nepanesamība, alerģijas
                    </td>
                    <td>
                        <input 
                        type="text"
                        maxLength="300"
                        name="medikamentu_nepanesamība_alergijas"
                        value={props.formData.medikamentu_nepanesamība_alergijas}
                        onChange={getInput}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
            <h3>Deguns</h3>
        <table>
            <tbody>
                <tr>
                    <td>
                        Ārējā forma
                    </td>
                    <td>
                        <select name="areja_forma"  id="areja_forma"
                         onChange={getInput} 
                         defaultValue={props.formData.areja_forma} >
                            <option value="" disabled hidden>Choose here</option>
                            <option value="taisna">taisna</option>
                            <option value="deformeta">deformēta</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default Form