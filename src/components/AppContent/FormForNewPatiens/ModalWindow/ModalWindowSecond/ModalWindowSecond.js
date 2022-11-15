import styles from './ModalWindowSecond.module.scss';

const ModalWindowSecond = (props) => {

    return(
        <div className={
            props.modalWindowSecondActive 
            ? 
            styles.container_active 
            : 
            styles.container 
            } 
            onClick={() => {
                props.cancelSecondModalWindowActive();
                }}>
        
            <div  className={styles.content} onClick={(e) => {e.stopPropagation()}}>
                <button onClick={() => {
                   props.cancelSecondModalWindowActive();
                    }}>X</button>
                    form2
                
                <button onClick={() => {
                    props.backToFirstModalWindow();
                    }}>back</button>
                <button onClick={()=>{
                    props.saveFormData();
                    props.cancelSecondModalWindowActive();
                    }}>save</button>
            </div>   
        </div>
    )
}

export default ModalWindowSecond;

