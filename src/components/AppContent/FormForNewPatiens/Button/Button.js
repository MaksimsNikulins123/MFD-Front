import {  
    ToggleButtonVisibilityActionCreator, 
    ToggleFirstModalWindowActivityActionCreator} from '../../../../redux/form-reducer';
import styles from './Button.module.scss';

const Button = (props) => {

    
    const toggleFirstModalWindowOnButtonClick = () => {
            props.dispatch(ToggleButtonVisibilityActionCreator())
            props.dispatch(ToggleFirstModalWindowActivityActionCreator());
        
    }


 return(
    <div className={styles.container}>
        <div className={styles.content}>
            {/* <button onClick={() => {toggleButtonClick(); props.setFirstModalWindowActive()}}>Form to add new patiens info</button> */}
            <button onClick={toggleFirstModalWindowOnButtonClick}>Form to add new patiens info</button>
        </div>
    </div>
 )
}
export default Button