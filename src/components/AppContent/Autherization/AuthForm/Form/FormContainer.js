import { connect } from 'react-redux'
import Form from './Form'




const mapStateToProps = (state) => {
    return {
        registrationForm: state.auth.registrationForm
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form)

export default FormContainer