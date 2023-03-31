
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import AppContent from './AppContent'
import { compose } from 'redux';



const AppContentContainer = compose(
    withAuthRedirect
)(AppContent) 



export default AppContentContainer
