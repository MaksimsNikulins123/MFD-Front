import { HandleInputValueActionCreator, ToggleLoadingAnimationActionCreator } from "../search-reducer";
import { FindPatiensThunkCreator } from "./FindPatientsThunkCreator";

let timer = null;

const resetTimer = () => {
        return (
            clearTimeout(timer)
        )
    }

export const HandleRegistrationInputThunkCreator = (firstname, email, password) => {
    resetTimer()

        return (dispatch) => {
         
        //     dispatch(HandleInputValueActionCreator(searching))
            
        //     if(searching.length > 2) {

        //     dispatch(ToggleLoadingAnimationActionCreator(true))
                
        //     timer = setTimeout(() => {
                   
        //             dispatch(FindPatiensThunkCreator(searching, currentPage, usersCountOnPage));
                   
        //     }, 3000);   
        // }
    }
   
        
}