
const HANDLE_INPUT_VALUE = "HANDLE-INPUT-VALUE";
const RERENDER_AFTER_SET_TIME_OUT = "RERENDER-AFTER-SET-TIME-OUT";
const HIDE_PATIENT_INFO = "HIDE-PATIENT-INFO";
const CHANGE_CURRENT_PAGE_TO_PREVIOUS = "CHANGE-CURRENT-PAGE-TO-PREVIOUS";
const CHANGE_CURRENT_PAGE_TO_NEXT = "CHANGE-CURRENT-PAGE-TO-NEXT";
const AXIOS_FIND_CURRENT_USERS = "AXIOS-FIND-CURRENT-USERS";
const TOGGLE_LOADING_ANIMATION = "TOGGLE-LOADING-ANIMATION";
const REQUEST_TO_API = "REQUEST-TO-API";
const RESPONSE_FROM_API = "RESPONSE-FROM-API"



let initialState = {
    auth: true,
    request: false,
    response: false,
    searching: "",
    timer: null,
    loading: false,
    searchResult: [

    ],
    usersTotalCount: 1,
    usersCountOnPage: 5,
    pagesAll: 1,
    currentPage: 1,
}
const searchReducer = (state = initialState, action) => {
    // debugger
    let stateCopy = {
        ...state
    };


    // const resetTimer = () => {
    //     return (
    //         clearTimeout(stateCopy.timer)
    //     )
    // }



    switch (action.type) {

        case HANDLE_INPUT_VALUE:
            let inputValue = action.inputValue;
            stateCopy.searching = inputValue;
            stateCopy.currentPage = 1;
            return stateCopy;
        case AXIOS_FIND_CURRENT_USERS:
            let currentUsers = action.currentUsers;
            let foundUsersCount = action.foundUsersCount;
            stateCopy.searchResult = currentUsers;
            if (foundUsersCount === 0) {
                stateCopy.usersTotalCount = 1;
            } else {
                stateCopy.usersTotalCount = foundUsersCount;
            }
            stateCopy.pagesAll = Math.ceil(stateCopy.usersTotalCount / stateCopy.usersCountOnPage)

            return stateCopy;
        case RERENDER_AFTER_SET_TIME_OUT:
            return stateCopy;
        case HIDE_PATIENT_INFO:
            let patientId = action.patientId;
            stateCopy.searchResult = [...state.searchResult]

            for (let index = 0; index < stateCopy.searchResult.length; index++) {

                if (stateCopy.searchResult[index].id === patientId) {
                    stateCopy.searchResult.splice(index, 1)
                } else {
                    continue;
                }

            }
            return stateCopy;
        case CHANGE_CURRENT_PAGE_TO_PREVIOUS:
            if(stateCopy.currentPage === 1 )
            {
                return stateCopy; 
            }else{
                stateCopy.currentPage = stateCopy.currentPage - 1;
            }   
            return stateCopy;
        case CHANGE_CURRENT_PAGE_TO_NEXT:
            if(stateCopy.currentPage === stateCopy.pagesAll)
            {
                return stateCopy;
            }else{
                // ToggleToNextPageThunkCreator(stateCopy.currentPage + 1, stateCopy.pagesAll, stateCopy.searching, stateCopy.usersCountOnPage );
                stateCopy.currentPage = stateCopy.currentPage + 1;
            }
            
            return stateCopy 
        case TOGGLE_LOADING_ANIMATION:
            stateCopy.loading = action.value;
            return stateCopy;
        case REQUEST_TO_API:
            stateCopy.request = action.value;
            return stateCopy;
        case RESPONSE_FROM_API:
            stateCopy.response = action.value;
            return stateCopy;
        default:
            return state;
    }

}

//Async function realization in store
//-------------------------------------------------------------------
// const rerenderAfterSetTimeOutActionCreator = () => {
//     // debugger
//     return {
//         type: RERENDER_AFTER_SET_TIME_OUT,

//     }
// }
//-------------------------------------------------------------------

export const HandleInputValueActionCreator = (inputValue) => {
    return {
        type: HANDLE_INPUT_VALUE,
        inputValue: inputValue
    }
}
export const AxiosFindCurrentUsersActionCreator = (currentUsers, foundUsersCount) => {
    return {
        type: AXIOS_FIND_CURRENT_USERS,
        currentUsers: currentUsers,
        foundUsersCount: foundUsersCount
    }
}
export const HidePatientInfoActionCreator = (patientIdToHide) => {
    return {
        type: HIDE_PATIENT_INFO,
        patientId: patientIdToHide
    }
}
export const ChangeCurrentPageToNextActionCreator = () => {
    return {
        type: CHANGE_CURRENT_PAGE_TO_NEXT,
    }
}
export const ChangeCurrentPageToPreviousActionCreator = () => {
    return {
        type: CHANGE_CURRENT_PAGE_TO_PREVIOUS,
    }
}
export const ToggleLoadingAnimationActionCreator = (value) => {
    return {
        type: TOGGLE_LOADING_ANIMATION,
        value: value
    }
}
export const RequestToApiActionCreator = (value) => {
    return {
        type: REQUEST_TO_API,
        value: value
    }
}
export const ResponseFromApiActionCreator = (value) => {
    return {
        type: RESPONSE_FROM_API,
        value: value
    }
}

export default searchReducer;