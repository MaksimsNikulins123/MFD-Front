import styles from './Form2.module.scss';

const Form2 = (props) => {

    const getInput = (e) => {   
        props.handleInput(e)
        
    }

    const toggleSelectValue = () => {
        const select = document.getElementById('atdalijumi')
        const options = document.getElementById('hidden_div')
        if(select.value == 'nav'){
            options.style.display = 'none'
        } else {
            options.style.display = 'block'
        }
    }

    return(
    <div className={styles.form_container}>
        
        <table>
            <tbody>
                <tr>
                    <td>Gļotāda</td>
                    <td>
                        <select name="glotada1"  id="glotada1"
                            onChange={getInput} 
                            defaultValue={props.formData.glotada1} >
                            <option value="" disabled hidden>Choose here</option>
                            <option value="sarta">sarta</option>
                            <option value="hiperemeta">hiperemēta</option>
                            <option value="cianotiska">cianotiska</option>
                            <option value="bala">bāla</option>
                        </select>
                        <select name="glotada2"  id="glotada2"
                            onChange={getInput} 
                            defaultValue={props.formData.glotada2} >
                            <option value="" disabled hidden>Choose here</option>
                            <option value="tuskaina">tūskaina</option>
                            <option value="atrofiska">atrofiska</option>
                            <option value="hipertrofiska">hipertrofiska</option>
                        </select>
                    </td>  
                </tr>
                <tr>
                    <td>
                        Deguna ejas
                    </td>
                    <td>
                        <select name="deguna_ejas" id="deguna_ejas" multiple="multiple">
                            <option value="brivas">brīvas</option>
                            <option value="sasaurinatas">sašaurinātas</option>
                            <option value="saaugumi">saaugumi</option>
                            <option value="veidojumi">veidojumi</option>
                        </select> 
                    </td>
                </tr>
                <tr>
                    <td>
                        Atdalījumi
                    </td>
                    <td>
                        <select name="atdalijumi" id="atdalijumi" onChange={toggleSelectValue}>
                            <option value="nav">nav</option>
                            <option value="ir">ir</option>
                        </select> 
                        <div id="hidden_div" className={styles.hidden_div}>
                            <select name="atdalijumu_veidi" id="atdalijumu_veidi" multiple="multiple">
                                <option value="serozi">serozi</option>
                                <option value="glotaini">gļotaini</option>
                                <option value="strutaini">strutaini</option>
                                <option value="asinaini">asiņaini</option>
                            </select> 
                        </div>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        Deguna starpsiena
                    </td>
                    <td>
                        <select name="deguna_starpsiena" id="deguna_starpsiena">
                            <option value="taisna">taisna</option>
                            <option value="devieta">deviēta</option>
                            <option value="perforeta">perforēta</option>
                        </select> 
                    </td>
                </tr>
                <tr>
                    <td>
                        Elpošana caur degunu
                    </td>
                    <td>
                        <select name="elposana_caur_degunu" id="elposana_caur_degunu">
                            <option value="briva">brīva</option>
                            <option value="apgrutinata">apgrūtināta</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
            <h3>Mutes dobums</h3>
        <table>
            <tbody>
                <tr>
                    <td>
                        Rīkle
                    </td>
                    <td>
                        <select name="rikle1" id="rikle1" multiple="multiple">
                            <option value="sarta">sārta</option>
                            <option value="hiperemeta">hiperemēta</option>
                            <option value="cianotiska">cianotiska</option>
                            <option value="bala">bāla</option>
                        </select>
                        <select name="rikle2" id="rikle2" multiple="multiple">
                            <option value="tuskaina">tūskaina</option>
                            <option value="atrofiska">atrofiska</option>
                            <option value="hipertrofiska">hipertrofiska</option>
                        </select> 
                    </td>
                </tr>
                <tr>
                    <td>
                        Mandeles
                    </td>
                    <td>
                        <select name="mandeles1" id="mandeles1">
                            <option value="parasta_lieluma">parasta lieluma</option>
                            <option value="palielinatas">palielinātas</option>
                        </select>
                        <select name="mandeles2" id="mandeles2">
                            <option value="aplikums_ir">aplikums ir</option>
                            <option value="aplikuma_nav">aplikuma nav</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default Form2