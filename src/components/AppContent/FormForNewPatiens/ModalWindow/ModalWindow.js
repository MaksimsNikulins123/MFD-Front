import ModalWindowFirstContainer from './ModalWindowFirst/ModalWindowFirstContainer';
import ModalWindowSecondContainer from './ModalWindowSecond/ModalWindowSecondContainer';

const ModalWindow = (props) => {


 return(
        <>
            {
            props.form.buttonClick && props.form.modalWindowFirstActive
                ?
                <ModalWindowFirstContainer 
                form={props.form}
                dispatch={props.dispatch}
                />
                :
                <ModalWindowSecondContainer 
                form={props.form}
                dispatch={props.dispatch}
                />
            }
        </>
 )
}
export default ModalWindow