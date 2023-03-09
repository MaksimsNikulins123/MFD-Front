import { ChangeCurrentPageToNextActionCreator, HandleInputValueActionCreator, ToggleLoadingAnimationActionCreator } from "../search-reducer";
import { FindPatiensThunkCreator } from "./FindPatientsThunkCreator";

let timer = null;

const resetTimer = () => {
        return (
            clearTimeout(timer)
        )
    }

export const ToggleToNextPageThunkCreator = (currentPage, pagesAll, searching, usersCountOnPage) => {
    resetTimer()
    
        return (dispatch) => {

            if (currentPage === pagesAll) {
                alert("No more pages")
            } else {  
                dispatch(ToggleLoadingAnimationActionCreator(true))
                    
                timer = setTimeout(() => {
                    dispatch(FindPatiensThunkCreator(searching, currentPage, usersCountOnPage)); 
                    dispatch(ChangeCurrentPageToNextActionCreator())            
            }, 1000);          
            }
        }       
}