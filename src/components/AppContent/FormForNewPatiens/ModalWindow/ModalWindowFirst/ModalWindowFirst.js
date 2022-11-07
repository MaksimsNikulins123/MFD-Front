import {HandleFirstModalWindowInputValueActionCreator, 
    ToggleFirstModalWindowActiveOnButtonClickActionCreator, 
    ToggleSecondModalWindowActiveOnButtonClickActionCreator } from '../../../../../redux/Store';
import styles from './ModalWindowFirst.module.scss';
// import { useState } from 'react';




const ModalWindowFirst = (props) => {

    const cancelFirstModalWindowActive = () => {  
      
        props.dispatch(ToggleFirstModalWindowActiveOnButtonClickActionCreator());
    }
    const handleInputValue = (e) => {
        let inputValue = e.target.value;
        props.dispatch(HandleFirstModalWindowInputValueActionCreator(inputValue))
    }
    const toggleSecondModalWindowActive = () => {
        props.dispatch(ToggleSecondModalWindowActiveOnButtonClickActionCreator())
    }
    return(
                <div className={
                    props.form.modalWindowFirstActive 
                    ? 
                    styles.container_active 
                    : 
                    styles.container 
                    } 
                    onClick={() => {
                        cancelFirstModalWindowActive(); 
                        // props.form.handleButtonClick() 
                        }}>
        
                 <div  className={styles.content} onClick={(e) => {e.stopPropagation()}}>
                    <button onClick={() => {
                        cancelFirstModalWindowActive();
                        }}>X</button>
                        form1
                    <input 
                        type="text" 
                        name="input" 
                        onChange={handleInputValue} 
                        value={props.form.inputValue}/>
                    
                <button onClick={() => {
                    toggleSecondModalWindowActive();
                    }}>next</button>
                <button onClick={() => {
                    cancelFirstModalWindowActive(); 
                    }}>cancel</button>
            </div>  
            
        </div>
       
    )
}

export default ModalWindowFirst

