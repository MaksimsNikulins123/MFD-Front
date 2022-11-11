import {HandleFirstModalWindowInputValueActionCreator,    
    ToggleButtonVisibilityActionCreator,   
    ToggleFirstModalWindowActivityActionCreator, 
    ToggleSecondModalWindowActivityActionCreator, 
    } from '../../../../../redux/form-reducer';
// import ModalWindow from '../ModalWindow';
import ModalWindowFirst from './ModalWindowFirst';
// import styles from './ModalWindowFirst.module.scss';
// import { useState } from 'react';




const ModalWindowFirstContainer = (props) => {

    const cancelFirstModalWindowActive = () => {  
        props.dispatch(ToggleFirstModalWindowActivityActionCreator());
        props.dispatch(ToggleButtonVisibilityActionCreator());
    }
    const handleInputValue = (e) => {
        let inputValue = e.target.value;
        props.dispatch(HandleFirstModalWindowInputValueActionCreator(inputValue))
    }
    const toggleSecondModalWindowActive = () => {
        props.dispatch(ToggleFirstModalWindowActivityActionCreator());
        props.dispatch(ToggleSecondModalWindowActivityActionCreator())
    }
    return(
            <ModalWindowFirst 
            modalWindowFirstActive={props.form.modalWindowFirstActive}
            inputValue={props.form.inputValue}
            cancelFirstModalWindowActive={cancelFirstModalWindowActive}
            handleInputValue={handleInputValue}
            toggleSecondModalWindowActive={toggleSecondModalWindowActive}
            />
       
    )
}

export default ModalWindowFirstContainer;