import { connect } from 'react-redux';
import ControlButtons from './ControlButtons';

const mapStateToProps = (state) => {
    return {
        
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const ControlButtonsContainer = connect(mapStateToProps, mapDispatchToProps)(ControlButtons)

export default ControlButtonsContainer