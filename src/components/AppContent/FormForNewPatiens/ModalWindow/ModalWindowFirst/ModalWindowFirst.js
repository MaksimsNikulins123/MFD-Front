import styles from './ModalWindowFirst.module.scss';
// import { useState } from 'react';




const ModalWindowFirst = (props) => {

// debugger
    return(
                <div className={props.form.modalWindowFirstActive ? styles.container_active : styles.container } onClick={() => {props.form.setFirstModalWindowActive(); props.form.handleButtonClick() }}>
        
                 <div  className={styles.content} onClick={(e) => {e.stopPropagation()}}>
                    <button onClick={() => {props.form.setFirstModalWindowActive(); props.form.handleButtonClick()}}>X</button>
                        form1
                    <input type="text" name="input" onChange={props.form.handleInputValue} value={props.form.inputValue}/>
                    
                <button onClick={() => {props.form.setSecondModalWindowActive(); props.form.setFirstModalWindowActive()}}>next</button>
                <button onClick={() => {props.form.setFirstModalWindowActive(); props.form.handleButtonClick()}}>cancel</button>
            </div>  
            
        </div>
       
    )
}

export default ModalWindowFirst

