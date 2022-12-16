import store from "./redux-store";

const HANDLE_INPUT_VALUE = "HANDLE-INPUT-VALUE";
const RERENDER_AFTER_SET_TIME_OUT = "RERENDER-AFTER-SET-TIME-OUT";
const HIDE_PATIENT_INFO = "HIDE-PATIENT-INFO";
const CHANGE_CURRENT_PAGE_TO_BACK = "CHANGE-CURRENT-PAGE-TO-BACK";
const CHANGE_CURRENT_PAGE_TO_NEXT = "CHANGE-CURRENT-PAGE-TO-NEXT"
const AXIOS_GET_ALL_USERS = "AXIOS-GET-ALL-USERS"

let initialState = {
    request: false,
    response: false,
    searching: "",
    handleInputTypingTimer: null,
    handlePaginationTimer: null,
    searchResult: [
        
    ],
    usersTotalCount: 1,
    usersCountOnPage: 5,
    pagesAll: 1,
    currentPage: 1,
}
const searchReducer = (state = initialState, action, e) => {
// debugger
let stateCopy = {...state};

const handleInputTimer = () => {
    return (
        clearTimeout(stateCopy.handleInputTypingTimer)
    )
}
const handlePaginationTimer = () => {
    return (
        clearTimeout(stateCopy.handlePaginationTimer)
    )
}


switch(action.type){
    
    case HANDLE_INPUT_VALUE:
    //   debugger
        let inputValue = action.inputValue;
        stateCopy.searching = inputValue;
        stateCopy.response = false;
        
        handleInputTimer()
        handlePaginationTimer() 
            if(stateCopy.searching.length >2)
            {  
                console.log("Preparing for sending request to server");
  
                stateCopy.handleInputTypingTimer = setTimeout(() => {
                   
                    console.log("Sending request to server");
                    console.log("Show users with personal code started on " + inputValue);

                    stateCopy.request = true;
                    stateCopy.response = false;
                   
                    store.dispatch(rerenderAfterSetTimeOutActionCreator());
                    }, 3000);
            } 
            return stateCopy; 
    case AXIOS_GET_ALL_USERS:
        let allUsers = action.allUsers;
        stateCopy.searchResult = allUsers;
        stateCopy.pagesAll = Math.ceil(stateCopy.searchResult.length / stateCopy.usersCountOnPage)
        stateCopy.request = false;
        stateCopy.response = true;
        // store.dispatch(rerenderAfterSetTimeOutActionCreator());
        return stateCopy;
    case RERENDER_AFTER_SET_TIME_OUT:
        return stateCopy;
    case HIDE_PATIENT_INFO:
        let patientId = action.patientId;
        stateCopy.searchResult = [...state.searchResult];
        
        for (let index = 0; index < stateCopy.searchResult.length; index++) {
            if(stateCopy.searchResult[index].id == patientId ) {
                stateCopy.searchResult[index] = {...state.searchResult[index]}
                stateCopy.searchResult[index].hide = true;
            }        
        }
        return stateCopy;
    case CHANGE_CURRENT_PAGE_TO_BACK:
        if(stateCopy.currentPage == 1) {
            return stateCopy
        }
        else {
            stateCopy.currentPage = stateCopy.currentPage - 1;
            handleInputTimer()
            handlePaginationTimer()     
                console.log("Preparing for sending request to server");
               
                stateCopy.handlePaginationTimer = setTimeout(() => {
                   
                    console.log("Sending request to server");

                    console.log("Show next" + " " + stateCopy.usersCountOnPage + " " + "users");

                    //axios request
                
                    console.log("Getting response from server");

                    stateCopy.response = true;

                    //axios response

                    // stateCopy.searchResult = axios response

                    stateCopy.searchResult = [
                        {
                            id: 1,
                            created_at: "12.09.2022",
                            personal_code: "123456-12345",
                            name: "Max",
                            surname: "Nikulin",
                            hide: false
                        },
                        {
                            id: 2,
                            created_at: "22.09.2022",
                            personal_code: "123456-12345",
                            name: "Maxim",
                            surname: "Nikulin",
                            hide: false
                        },
                        {
                            id: 3,
                            created_at: "12.09.2022",
                            personal_code: "123456-12345",
                            name: "Max",
                            surname: "Nikulin",
                            hide: false
                        },
                        {
                            id: 4,
                            created_at: "22.09.2022",
                            personal_code: "123456-12345",
                            name: "Maxim",
                            surname: "Nikulin",
                            hide: false
                        },
                        {
                            id: 5,
                            created_at: "12.09.2022",
                            personal_code: "123456-12345",
                            name: "Max",
                            surname: "Nikulin",
                            hide: false
                        },
                        ]

                    stateCopy.pagesAll = Math.ceil(stateCopy.usersTotalCount / stateCopy.usersCountOnPage)
        
                    store.dispatch(rerenderAfterSetTimeOutActionCreator());
                    }, 3000);
        }
        return stateCopy
    case CHANGE_CURRENT_PAGE_TO_NEXT:
        if(stateCopy.currentPage == stateCopy.pagesAll){
            return stateCopy
        }
        else {
            stateCopy.currentPage = stateCopy.currentPage + 1;
            handleInputTimer()
            handlePaginationTimer()     
                console.log("Preparing for sending request to server");
               
                stateCopy.handlePaginationTimer = setTimeout(() => {
                   
                    console.log("Sending request to server");

                    console.log("Show next" + " " + stateCopy.usersCountOnPage + " " + "users");

                    //axios request
                
                    console.log("Getting response from server");

                    stateCopy.response = true;

                    //axios response

                    // stateCopy.searchResult = axios response

                    stateCopy.searchResult = [
                        {
                                    id: 6,
                                    created_at: "22.09.2022",
                                    personal_code: "123456-12345",
                                    name: "Maxim",
                                    surname: "Nikulin",
                                    hide: false
                            },
                            {
                                    id: 7,
                                    created_at: "12.09.2022",
                                    personal_code: "123456-12345",
                                    name: "Max",
                                    surname: "Nikulin",
                                    hide: false
                            },
                            {
                                    id: 8,
                                    created_at: "22.09.2022",
                                    personal_code: "123456-12345",
                                    name: "Maxim",
                                    surname: "Nikulin",
                                    hide: false
                            },
                            {
                                    id: 9,
                                    created_at: "12.09.2022",
                                    personal_code: "123456-12345",
                                    name: "Max",
                                    surname: "Nikulin",
                                    hide: false
                            },
                            {
                                    id: 10,
                                    created_at: "22.09.2022",
                                    personal_code: "123456-12345",
                                    name: "Maxim",
                                    surname: "Nikulin",
                                    hide: false
                            },
                    ]

                    stateCopy.pagesAll = Math.ceil(stateCopy.usersTotalCount / stateCopy.usersCountOnPage)
        
                    store.dispatch(rerenderAfterSetTimeOutActionCreator());
                    }, 3000);
            
        }
        
        return stateCopy
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
export const AxiosGetAllUsersActionCreator = (allUsers) => {
    return {
        type: AXIOS_GET_ALL_USERS,
        allUsers: allUsers
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



export default searchReducer;