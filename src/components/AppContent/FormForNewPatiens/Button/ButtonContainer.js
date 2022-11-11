import {  
    ToggleButtonVisibilityActionCreator, 
    ToggleFirstModalWindowActivityActionCreator} from '../../../../redux/form-reducer';
import Button from './Button';

const ButtonContainer = (props) => {

    
    const toggleFirstModalWindowOnButtonClick = () => {
            props.dispatch(ToggleButtonVisibilityActionCreator())
            props.dispatch(ToggleFirstModalWindowActivityActionCreator());       
        }

 return(
    <Button 
    toggleFirstModalWindowOnButtonClick={toggleFirstModalWindowOnButtonClick}
    />
    )
}
export default ButtonContainer;