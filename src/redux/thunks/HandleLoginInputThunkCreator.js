import { HandleLoginInputValueActionCreator, ToggleLoadingAnimationActionCreator } from "../auth-reducer";
import { SetLoginDataThunkCreator } from "./SetLoginDataThunkCreator";

let timer = null;

const resetTimer = () => {
        return (
            clearTimeout(timer)
        )
    }

export const HandleLoginInputThunkCreator = (login, email) => {
    resetTimer()

        return (dispatch) => {
         
            dispatch(HandleLoginInputValueActionCreator(login, email))
            
            if(login.length > 0 && email.length > 0) {

            dispatch(ToggleLoadingAnimationActionCreator(true))
                
            timer = setTimeout(() => {
                   
                    dispatch(SetLoginDataThunkCreator(login, email));
                   
            }, 3000);   
        }
    }
   
        
}