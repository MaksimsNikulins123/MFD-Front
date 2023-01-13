// import PatientsApi from "../../api/PatientsApi"

import { HandleInputValueActionCreator, ToggleLoadingAnimationActionCreator } from "../search-reducer";

let timer = null;

const resetTimer = () => {
        return (
            clearTimeout(timer)
        )
    }

export const HandleInputThunkCreator = (searching) => {

    resetTimer()
    
        return (dispatch) => {
         
            dispatch(HandleInputValueActionCreator(searching))
            
            if(searching.length > 2) {

            dispatch(ToggleLoadingAnimationActionCreator())

            console.log(searching)
            // stateCopy.request = false;
                console.log("Preparing for sending request to server");

                timer = setTimeout(() => {

                    console.log("Sending request to server");
                    console.log("Show users with personal code started on " + searching);

                    // dispatch(ToggleLoadingAnimation(true));
                    // FindPatiensThunkCreator(stateCopy.searching, stateCopy.currentPage, stateCopy.usersCountOnPage);
                    // FindPatiensThunk()
                    //    Find(stateCopy.searching, stateCopy.currentPage, stateCopy.usersCountOnPage);
                    // store.dispatch(rerenderAfterSetTimeOutActionCreator());
                }, 3000);
        // FindPatients(searching, currentPage, usersCountOnPage, dispatch)      
        // PatientsApi.FindPatients(searching, currentPage, usersCountOnPage, dispatch)      
    }
    }
   
        
}