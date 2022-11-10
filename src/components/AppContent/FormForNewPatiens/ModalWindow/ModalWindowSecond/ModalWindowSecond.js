import {SaveFormDataActionCreator, 
    ToggleButtonVisibilityActionCreator, 
    ToggleFirstModalWindowActivityActionCreator, 
    ToggleSecondModalWindowActivityActionCreator, } from '../../../../../redux/form-reducer';
import styles from './ModalWindowSecond.module.scss';

const ModalWindowSecond = (props) => {

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
        <div className={
            props.form.modalWindowSecondActive 
            ? 
            styles.container_active 
            : 
            styles.container 
            } 
            onClick={() => {
                cancelSecondModalWindowActive();
                }}>
        
            <div  className={styles.content} onClick={(e) => {e.stopPropagation()}}>
                <button onClick={() => {
                   cancelSecondModalWindowActive();
                    }}>X</button>
                    form2
                
                <button onClick={() => {
                    backToFirstModalWindow();
                    }}>back</button>
                <button onClick={()=>{
                    saveFormData();
                    cancelSecondModalWindowActive();
                    }}>save</button>
            </div>   
        </div>
    )
}

export default ModalWindowSecond

