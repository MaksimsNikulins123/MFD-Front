// import PatientsApi from "../api/PatientsApi";
import store from "./redux-store";

const HANDLE_INPUT_VALUE = "HANDLE-INPUT-VALUE";
const RERENDER_AFTER_SET_TIME_OUT = "RERENDER-AFTER-SET-TIME-OUT";
const HIDE_PATIENT_INFO = "HIDE-PATIENT-INFO";
const CHANGE_CURRENT_PAGE_TO_BACK = "CHANGE-CURRENT-PAGE-TO-BACK";
const CHANGE_CURRENT_PAGE_TO_NEXT = "CHANGE-CURRENT-PAGE-TO-NEXT";
const AXIOS_FIND_CURRENT_USERS = "AXIOS-FIND-CURRENT-USERS";
const TOGGLE_LOADING_ANIMATION = "TOGGLE-LOADING-ANIMATION"


let initialState = {
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


    const resetTimer = () => {
        return (
            clearTimeout(stateCopy.timer)
        )
    }



    switch (action.type) {

        case HANDLE_INPUT_VALUE:
            let inputValue = action.inputValue;
            stateCopy.searching = inputValue;
            stateCopy.response = false;
            stateCopy.currentPage = 1;
            // resetTimer()
            // if (stateCopy.searching.length > 2) {

            //     stateCopy.request = false;
            //     console.log("Preparing for sending request to server");

            //     stateCopy.timer = setTimeout(() => {

            //         console.log("Sending request to server");
            //         console.log("Show users with personal code started on " + inputValue);

            //         stateCopy.request = true;
            //         // FindPatiensThunkCreator(stateCopy.searching, stateCopy.currentPage, stateCopy.usersCountOnPage);
            //         // FindPatiensThunk()
            //         //    Find(stateCopy.searching, stateCopy.currentPage, stateCopy.usersCountOnPage);
            //         store.dispatch(rerenderAfterSetTimeOutActionCreator());
            //     }, 3000);
            // }
            return stateCopy;
        case AXIOS_FIND_CURRENT_USERS:
            // debugger
            let currentUsers = action.currentUsers;
            let foundUsersCount = action.foundUsersCount;
            stateCopy.searchResult = currentUsers;
            if (foundUsersCount === 0) {
                stateCopy.usersTotalCount = 1;
            } else {
                stateCopy.usersTotalCount = foundUsersCount;
            }
            stateCopy.pagesAll = Math.ceil(stateCopy.usersTotalCount / stateCopy.usersCountOnPage)
            stateCopy.request = false;
            stateCopy.response = true;

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
        case CHANGE_CURRENT_PAGE_TO_BACK:

            if (stateCopy.currentPage === 1) {
                return stateCopy
            } else {
                stateCopy.response = false;
                stateCopy.request = false;
                resetTimer()
                stateCopy.timer = setTimeout(() => {

                    stateCopy.currentPage = stateCopy.currentPage - 1;
                    console.log("Sending request to server");
                    // console.log("Show previous" + " " + stateCopy.usersCountOnPage + " " + "users");

                    stateCopy.request = true;

                    store.dispatch(rerenderAfterSetTimeOutActionCreator());
                }, 1000);
            }
            return stateCopy
        case CHANGE_CURRENT_PAGE_TO_NEXT:

            if (stateCopy.currentPage === stateCopy.pagesAll) {
                return stateCopy
            } else {
                stateCopy.response = false;
                stateCopy.request = false;
                resetTimer()
                stateCopy.timer = setTimeout(() => {

                    stateCopy.currentPage = stateCopy.currentPage + 1;
                    console.log("Sending request to server");
                    // console.log("Show next" + " " + stateCopy.usersCountOnPage + " " + "users");

                    stateCopy.request = true;

                    store.dispatch(rerenderAfterSetTimeOutActionCreator());
                }, 1000);
            }
            return stateCopy
        case TOGGLE_LOADING_ANIMATION:
            // let loading = action.loading;
            stateCopy.loading = !stateCopy.loading;
            return stateCopy;
        default:
            return state;
    }

}

//Async function realization in store
//-------------------------------------------------------------------
const rerenderAfterSetTimeOutActionCreator = () => {
    // debugger
    return {
        type: RERENDER_AFTER_SET_TIME_OUT,

    }
}
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
export const ChangeCurrentPageToBackActionCreator = () => {
    return {
        type: CHANGE_CURRENT_PAGE_TO_BACK,
    }
}
export const ChangeCurrentPageToNextActionCreator = () => {
    return {
        type: CHANGE_CURRENT_PAGE_TO_NEXT,
    }
}
export const ToggleLoadingAnimationActionCreator = () => {
    return {
        type: TOGGLE_LOADING_ANIMATION,
    }
}

export default searchReducer;