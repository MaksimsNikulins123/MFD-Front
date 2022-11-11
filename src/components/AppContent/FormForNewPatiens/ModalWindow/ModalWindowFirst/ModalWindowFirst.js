import {HandleFirstModalWindowInputValueActionCreator,    
    ToggleButtonVisibilityActionCreator,   
    ToggleFirstModalWindowActivityActionCreator, 
    ToggleSecondModalWindowActivityActionCreator, 
    } from '../../../../../redux/form-reducer';
import styles from './ModalWindowFirst.module.scss';
// import { useState } from 'react';




const ModalWindowFirst = (props) => {

    // const cancelFirstModalWindowActive = () => {  
    //     props.dispatch(ToggleFirstModalWindowActivityActionCreator());
    //     props.dispatch(ToggleButtonVisibilityActionCreator());
    // }
    // const handleInputValue = (e) => {
    //     let inputValue = e.target.value;
    //     props.dispatch(HandleFirstModalWindowInputValueActionCreator(inputValue))
    // }
    // const toggleSecondModalWindowActive = () => {
    //     props.dispatch(ToggleFirstModalWindowActivityActionCreator());
    //     props.dispatch(ToggleSecondModalWindowActivityActionCreator())
    // }
    return(
                <div className={
                    props.modalWindowFirstActive 
                    ? 
                    styles.container_active 
                    : 
                    styles.container 
                    } 
                    onClick={() => {
                        props.cancelFirstModalWindowActive(); 
                        }}>
        
                 <div  className={styles.content} onClick={(e) => {e.stopPropagation()}}>
                    <button onClick={() => {
                        props.cancelFirstModalWindowActive();
                        }}>X</button>
                        form1
                    <input 
                        type="text" 
                        name="input" 
                        onChange={props.handleInputValue} 
                        value={props.inputValue}/>
                    
                <button onClick={() => {
                    props.toggleSecondModalWindowActive();
                    }}>next</button>
                <button onClick={() => {
                    props.cancelFirstModalWindowActive(); 
                    }}>cancel</button>
            </div>  
            
        </div>
       
    )
}

export default ModalWindowFirst;

