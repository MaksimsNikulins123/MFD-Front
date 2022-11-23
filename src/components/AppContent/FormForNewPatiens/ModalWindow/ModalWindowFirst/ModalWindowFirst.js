import styles from './ModalWindowFirst.module.scss';

const ModalWindowFirst = (props) => {

    const handleInputValue = (e) => {
        let inputValue = e.target.value;
        props.handleInputValue(inputValue)
    }

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
                        onChange={handleInputValue} 
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

