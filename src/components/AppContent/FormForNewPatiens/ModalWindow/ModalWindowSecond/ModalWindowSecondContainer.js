import {SaveFormDataActionCreator, 
    ToggleButtonVisibilityActionCreator, 
    ToggleFirstModalWindowActivityActionCreator, 
    ToggleSecondModalWindowActivityActionCreator, } from '../../../../../redux/form-reducer';
import ModalWindowSecond from './ModalWindowSecond';
// import styles from './ModalWindowSecond.module.scss';

const ModalWindowSecondContainer = (props) => {

    const cancelSecondModalWindowActive = () => {
        props.dispatch(ToggleButtonVisibilityActionCreator())
        props.dispatch(ToggleSecondModalWindowActivityActionCreator())
    }
    const backToFirstModalWindow = () => {
        props.dispatch(ToggleSecondModalWindowActivityActionCreator())
        props.dispatch(ToggleFirstModalWindowActivityActionCreator());
    }

    const saveFormData = () => {
        props.dispatch(SaveFormDataActionCreator())
    }

    return(
        <ModalWindowSecond
        modalWindowSecondActive={props.form.modalWindowSecondActive} 
        cancelSecondModalWindowActive={cancelSecondModalWindowActive}
        backToFirstModalWindow={backToFirstModalWindow}
        saveFormData={saveFormData}
        />
    )
}

export default ModalWindowSecondContainer;

