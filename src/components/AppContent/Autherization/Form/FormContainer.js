import { connect } from 'react-redux'
import Form from './Form'




const mapStateToProps = (state) => {
    return {
        toggleForm: state.auth.toggleForm
    }
    
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form)

export default FormContainer