import { connect } from 'react-redux';
import ModalWindow from './ModalWindow';

const mapStateToProps = (state) => {
    return {
        buttonClick: state.form.buttonClick,
        modalWindowFirstActive: state.form.modalWindowFirstActive
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const ModalWindowContainer = connect(mapStateToProps, mapDispatchToProps)(ModalWindow);

export default ModalWindowContainer;