import styles from './ModalWindow.module.scss';
import ModalWindowFirst from './ModalWindowFirst/ModalWindowFirst';
import ModalWindowSecond from './ModalWindowSecond/ModalWindowSecond';

const ModalWindow = (props) => {


 return(
        <>
            {
                props.form.buttonClick && props.form.modalWindowFirstActive
                    ?
                    <ModalWindowFirst 
                    form={props.form}
                />
                :
                <ModalWindowSecond 
                form={props.form}/>
            }
        </>
 )
}
export default ModalWindow