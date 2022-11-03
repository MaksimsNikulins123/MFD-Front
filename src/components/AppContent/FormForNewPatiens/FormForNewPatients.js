import Button from './Button/Button';
import styles from './FormForNewPatients.module.scss';
import ModalWindow from './ModalWindow/ModalWindow';


const FormForNewPatients = (props) => {

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                {
                props.form.buttonClick 
                    ?
                <ModalWindow 
                    form={props.form}/>
                    :
                <Button 
                    handleButtonClick={props.form.handleButtonClick}
                    setFirstModalWindowActive={props.form.setFirstModalWindowActive}
                    />
                }           
            </div>        
        </div>
    )
}

export default FormForNewPatients