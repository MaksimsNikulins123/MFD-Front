// import Button from './Button/Button';
import ButtonContainer from './Button/ButtonContainer';
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
                    form={props.form}
                    dispatch={props.dispatch}
                    />
                    :
                <ButtonContainer
                    // form={props.form} 
                    dispatch={props.dispatch}
                    // handleButtonClick={handleButtonClick}
                    // setFirstModalWindowActive={props.form.setFirstModalWindowActive}
                    />
                }           
            </div>        
        </div>
    )
}

export default FormForNewPatients