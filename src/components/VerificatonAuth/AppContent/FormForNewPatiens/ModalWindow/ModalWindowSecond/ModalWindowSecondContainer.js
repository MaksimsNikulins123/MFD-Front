import { connect } from 'react-redux';
import {SaveFormDataActionCreator, 
    ToggleButtonVisibilityActionCreator, 
    ToggleFirstModalWindowActivityActionCreator, 
    ToggleSecondModalWindowActivityActionCreator, } from '../../../../../../redux/form-reducer';
import ModalWindowSecond from './ModalWindowSecond';

const mapStateToProps = (state) => {
    return {
        modalWindowSecondActive: state.form.modalWindowSecondActive,
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        cancelSecondModalWindowActive: () => {
            dispatch(ToggleButtonVisibilityActionCreator())
            dispatch(ToggleSecondModalWindowActivityActionCreator())
        },
        backToFirstModalWindow: () => {
            dispatch(ToggleSecondModalWindowActivityActionCreator())
            dispatch(ToggleFirstModalWindowActivityActionCreator());
        },
        saveFormData: () => {
            dispatch(SaveFormDataActionCreator())
        }
    }
    }
const ModalWindowSecondContainer = connect(mapStateToProps, mapDispatchToProps)(ModalWindowSecond);

export default ModalWindowSecondContainer;

