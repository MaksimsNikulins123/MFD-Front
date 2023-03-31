import { connect } from 'react-redux';
import {  
    ToggleButtonVisibilityActionCreator, 
    ToggleFirstModalWindowActivityActionCreator} from '../../../../../redux/form-reducer';
import Button from './Button';

const mapStateToProps = (state) => {
    return {}
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleFirstModalWindowOnButtonClick: () => {
            dispatch(ToggleButtonVisibilityActionCreator())
            dispatch(ToggleFirstModalWindowActivityActionCreator())
        }
    }
}
const ButtonContainer = connect(mapStateToProps, mapDispatchToProps)(Button);

export default ButtonContainer;