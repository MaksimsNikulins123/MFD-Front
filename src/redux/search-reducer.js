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

switch(action.type){
    case HANDLE_INPUT_VALUE:
        // debugger
        // let inputValue = action.inputValue;
        // state.searching = inputValue;
        let copyState = {...state};
        copyState.searching = inputValue;
        // let newStateSearch = {...newState.search};
        // let newStateSearchSearching = {...newStateSearch.searching}
        //     newStateSearchSearching = inputValue;

            if(state.searching.length >2)
            {
                console.log("Sending request to server");
                // setInterval(
                //     () => {
                //         state.response = true;
                //     store.dispatch(rerenderAfterSetTimeOutActionCreator());
                //     console.log("Getting response from server");
                //     return state;
                //     }, 3000);
                    setTimeout(() => {
                        state.response = true;
                        store.dispatch(rerenderAfterSetTimeOutActionCreator());
                        console.log("Getting response from server");
                        // return state;
                    }, 3000);  
            } 
            return copyState; 
    case RERENDER_AFTER_SET_TIME_OUT:
        return state;
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