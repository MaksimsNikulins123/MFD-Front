import styles from './ModalWindowSecond.module.scss';

const ModalWindowSecond = (props) => {

    return(
        <div className={props.form.modalWindowSecondActive ? styles.container_active : styles.container } onClick={() => {props.form.setSecondModalWindowActive(); props.form.handleButtonClick()}}>
        
            <div  className={styles.content} onClick={(e) => {e.stopPropagation()}}>
                <button onClick={() => {props.form.setSecondModalWindowActive(); props.form.handleButtonClick()}}>X</button>
                    form2
                
                <button onClick={() => {props.form.setFirstModalWindowActive(); props.form.setSecondModalWindowActive()}}>back</button>
                <button onClick={()=>{props.form.saveFormData(); props.form.setSecondModalWindowActive(); props.form.handleButtonClick()}}>save</button>
            </div>   
        </div>
    )
}

export default ModalWindowSecond

