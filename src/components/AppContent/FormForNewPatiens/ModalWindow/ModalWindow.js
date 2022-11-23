import ModalWindowFirstContainer from './ModalWindowFirst/ModalWindowFirstContainer';
import ModalWindowSecondContainer from './ModalWindowSecond/ModalWindowSecondContainer';

const ModalWindow = (props) => {
    
 return(
        <>
            {
            props.buttonClick && props.modalWindowFirstActive
                ?
                <ModalWindowFirstContainer />
                :
                <ModalWindowSecondContainer />
            }
        </>
 )
}
export default ModalWindow