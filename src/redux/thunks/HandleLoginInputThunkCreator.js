import { HandleLoginInputValueActionCreator, ToggleLoadingAnimationActionCreator } from "../auth-reducer";
import { CheckLoginDataThunkCreator } from "./CheckLoginDataThunkCreator";

let timer = null;

const resetTimer = () => {
        return (
            clearTimeout(timer)
        )
    }

export const HandleLoginInputThunkCreator = (email, password) => {
    resetTimer()

        return (dispatch) => {
         
            dispatch(HandleLoginInputValueActionCreator(email, password))
            
            if(email.length > 0 && password.length > 0) {

            dispatch(ToggleLoadingAnimationActionCreator(true))
                
            timer = setTimeout(() => {
                   
                    dispatch(CheckLoginDataThunkCreator(email, password));
                   
            }, 3000);   
        }
    }
   
        
}