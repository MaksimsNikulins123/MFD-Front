import { connect } from 'react-redux';
import {HandleFirstModalWindowInputValueActionCreator,    
    ToggleButtonVisibilityActionCreator,   
    ToggleFirstModalWindowActivityActionCreator, 
    ToggleSecondModalWindowActivityActionCreator, 
    } from '../../../../../../redux/form-reducer';
import ModalWindowFirst from './ModalWindowFirst';

const mapStateToProps = (state) => {
    return {
        modalWindowFirstActive: state.form.modalWindowFirstActive,
        inputValue: state.form.inputValue
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        cancelFirstModalWindowActive: () => {
            dispatch(ToggleFirstModalWindowActivityActionCreator());
            dispatch(ToggleButtonVisibilityActionCreator());
        }, 
        handleInputValue: (inputValue) => {
            dispatch(HandleFirstModalWindowInputValueActionCreator(inputValue))
        },
        toggleSecondModalWindowActive: () => {
            dispatch(ToggleFirstModalWindowActivityActionCreator());
            dispatch(ToggleSecondModalWindowActivityActionCreator())
        }
    }
}

const ModalWindowFirstContainer = connect(mapStateToProps, mapDispatchToProps)(ModalWindowFirst);

export default ModalWindowFirstContainer;