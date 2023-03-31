import { connect } from 'react-redux'
import { compose } from 'redux'
// import Preloader from '../components/Preloader/Preloader';
// import { GetAuthStatusThunkCreator } from '../redux/thunks/GetAuthStatusThunkCreator';


const mapStateToPropsForAuthRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
    
}

const mapDispatchToPropsForAuthRedirect = (dispatch) => {
    return {  
    }
}



export const withAuthRedirect = (Component) => {
    
    
            function AuthRedirectComponent(props) {
      
                    return <Component {...props} />
         
            }
  
        
    
   
const ConnectedAuthRedirectComponent = compose(
        connect(mapStateToPropsForAuthRedirect, mapDispatchToPropsForAuthRedirect)
    )(AuthRedirectComponent)
    
    
    return ConnectedAuthRedirectComponent
}