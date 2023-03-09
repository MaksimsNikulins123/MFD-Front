import { ChangeCurrentPageToNextActionCreator, ChangeCurrentPageToPreviousActionCreator, HandleInputValueActionCreator, ToggleLoadingAnimationActionCreator } from "../search-reducer";
import { FindPatiensThunkCreator } from "./FindPatientsThunkCreator";

let timer = null;

const resetTimer = () => {
        return (
            clearTimeout(timer)
        )
    }

export const ToggleToPreviousPageThunkCreator = (currentPage, searching, usersCountOnPage ) => {
    resetTimer()
    
        return (dispatch) => {

            if (currentPage === 1) {
                alert("No more pages")
            } else {  
                dispatch(ToggleLoadingAnimationActionCreator(true))
                timer = setTimeout(() => {
                    dispatch(FindPatiensThunkCreator(searching, currentPage, usersCountOnPage)); 
                    // dispatch(ChangeCurrentPageToPreviousActionCreator())                  
            }, 1000);          
            }
        }       
}