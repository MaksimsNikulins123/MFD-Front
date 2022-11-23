import ButtonContainer from './Button/ButtonContainer';
import styles from './FormForNewPatients.module.scss';
// import ModalWindow from './ModalWindow/ModalWindow';
import ModalWindowContainer from './ModalWindow/ModalWindowContainer';


const FormForNewPatients = (props) => {


    return(
        <div className={styles.container}>
            <div className={styles.content}>
                {
                props.buttonClick 
                    ?
                <ModalWindowContainer/>
                    :
                <ButtonContainer/>
                }           
            </div>        
        </div>
    )
}

export default FormForNewPatients