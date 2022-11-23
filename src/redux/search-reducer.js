// import Store from "./Store";
import store from "./redux-store";


// const CHECK_IS_INPUT_NUMBER = "CHECK-IS-INPUT-NUMBER";
const HANDLE_INPUT_VALUE = "HANDLE-INPUT-VALUE";
// const GET_DATA_FROM_SERVER = "GET-DATA-FROM-SERVER";
// const SET_DATA_AFTER_TIMEOUT = "SET-DATA-AFTER-TIMEOUT";
const RERENDER_AFTER_SET_TIME_OUT = "RERENDER-AFTER-SET-TIME-OUT";

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
        },
        {
            id: 2,
            created_at: "22.09.2022",
            personal_code: "123456-12345",
            name: "Maxim",
            surname: "Nikulin",
        }
    ],
}
const searchReducer = (state = initialState, action, e) => {
// debugger
let copyState = {...state};

const timer = () => {
    return (
        clearTimeout(copyState.handleInputTypingTimer)
    )
}

switch(action.type){
    case HANDLE_INPUT_VALUE:
        let inputValue = action.inputValue;
        copyState.searching = inputValue;
        copyState.response = false;
        timer()
            if(copyState.searching.length >2)
            { 
                console.log("Preparing for sending request to server");
               
                copyState.handleInputTypingTimer = setTimeout(() => {
                    console.log("Sending request to server");
                    
                    console.log("Getting response from server");

                    copyState.response = true;
        
                    store.dispatch(rerenderAfterSetTimeOutActionCreator());
                    }, 3000);
            } 
            return copyState; 
    case RERENDER_AFTER_SET_TIME_OUT:
        // copyState.response = !action.response
        return copyState;
    default:
        return state;
}

}
export const HandleInputValueActionCreator = (inputValue) => {
    return {
        type: HANDLE_INPUT_VALUE,
        inputValue: inputValue
    }
}
const rerenderAfterSetTimeOutActionCreator = () => {
    return {
        type: RERENDER_AFTER_SET_TIME_OUT,
        
    }
}
export default searchReducer;