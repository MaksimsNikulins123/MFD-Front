import store from "./redux-store";

const HANDLE_INPUT_VALUE = "HANDLE-INPUT-VALUE";
const RERENDER_AFTER_SET_TIME_OUT = "RERENDER-AFTER-SET-TIME-OUT";
const HIDE_PATIENT_INFO = "HIDE-PATIENT-INFO";

let initialState = {
    request: false,
    response: false,
    searching: "",
    handleInputTypingTimer: null,
    searchResult: [
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
        // {
        //     id: 6,
        //     created_at: "22.09.2022",
        //     personal_code: "123456-12345",
        //     name: "Maxim",
        //     surname: "Nikulin",
        //     hide: false
        // },
        // {
        //     id: 7,
        //     created_at: "12.09.2022",
        //     personal_code: "123456-12345",
        //     name: "Max",
        //     surname: "Nikulin",
        //     hide: false
        // },
        // {
        //     id: 8,
        //     created_at: "22.09.2022",
        //     personal_code: "123456-12345",
        //     name: "Maxim",
        //     surname: "Nikulin",
        //     hide: false
        // },
        // {
        //     id: 9,
        //     created_at: "12.09.2022",
        //     personal_code: "123456-12345",
        //     name: "Max",
        //     surname: "Nikulin",
        //     hide: false
        // },
        // {
        //     id: 10,
        //     created_at: "22.09.2022",
        //     personal_code: "123456-12345",
        //     name: "Maxim",
        //     surname: "Nikulin",
        //     hide: false
        // },
        // {
        //     id: 11,
        //     created_at: "12.09.2022",
        //     personal_code: "123456-12345",
        //     name: "Max",
        //     surname: "Nikulin",
        //     hide: false
        // },
        // {
        //     id: 12,
        //     created_at: "22.09.2022",
        //     personal_code: "123456-12345",
        //     name: "Maxim",
        //     surname: "Nikulin",
        //     hide: false
        // },
        // {
        //     id: 13,
        //     created_at: "12.09.2022",
        //     personal_code: "123456-12345",
        //     name: "Max",
        //     surname: "Nikulin",
        //     hide: false
        // },
        // {
        //     id: 14,
        //     created_at: "22.09.2022",
        //     personal_code: "123456-12345",
        //     name: "Maxim",
        //     surname: "Nikulin",
        //     hide: false
        // },
        // {
        //     id: 15,
        //     created_at: "12.09.2022",
        //     personal_code: "123456-12345",
        //     name: "Max",
        //     surname: "Nikulin",
        //     hide: false
        // },
        // {
        //     id: 16,
        //     created_at: "22.09.2022",
        //     personal_code: "123456-12345",
        //     name: "Maxim",
        //     surname: "Nikulin",
        //     hide: false
        // }
    ],
    usersTotalCount: 16,
    usersCountOnPage: 5,
}
const searchReducer = (state = initialState, action, e) => {
// debugger
let stateCopy = {...state};

const timer = () => {
    return (
        clearTimeout(stateCopy.handleInputTypingTimer)
    )
}

switch(action.type){
    
    case HANDLE_INPUT_VALUE:
      
        let inputValue = action.inputValue;
        stateCopy.searching = inputValue;
        stateCopy.response = false;
        timer()
            if(stateCopy.searching.length >2)
            { 
              
                console.log("Preparing for sending request to server");
               
                stateCopy.handleInputTypingTimer = setTimeout(() => {
                   
                    console.log("Sending request to server");
                    
                    console.log("Getting response from server");

                    stateCopy.response = true;
        
                    store.dispatch(rerenderAfterSetTimeOutActionCreator());
                    }, 3000);
            } 
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
       
        return stateCopy
    default:
        return state;
}

}

//Async function realization in store
//-------------------------------------------------------------------
const rerenderAfterSetTimeOutActionCreator = () => {
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


export const HidePatientInfoActionCreator = (patientIdToHide) => {
    return {
        type: HIDE_PATIENT_INFO,
        patientId: patientIdToHide

        
    }
}

export default searchReducer;