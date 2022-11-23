import { connect } from 'react-redux';
import FormForNewPatients from './FormForNewPatients';

const mapStateToProps = (state) => {
    return {
        buttonClick: state.form.buttonClick
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const FormForNewPatientsContainer = connect(mapStateToProps, mapDispatchToProps)(FormForNewPatients);

export default FormForNewPatientsContainer;