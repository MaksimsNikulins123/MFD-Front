import Store from "./Store";


const CHECK_IS_INPUT_NUMBER = "CHECK-IS-INPUT-NUMBER";
const HANDLE_INPUT_VALUE = "HANDLE-INPUT-VALUE";
const GET_DATA_FROM_SERVER = "GET-DATA-FROM-SERVER";
// const SET_DATA_AFTER_TIMEOUT = "SET-DATA-AFTER-TIMEOUT";


const searchReducer = (state, action, e) => {
// debugger
    if(action.type === CHECK_IS_INPUT_NUMBER)
    {
        let input = action.inputValue;

        if (!(/[0-9 -]/.test(input))) {
            e.preventDefault();
        } 
       
    }
    else if(action.type === HANDLE_INPUT_VALUE)
        {
            let inputValue = action.inputValue;
            state.searching = inputValue;
            
            if(state.searching.length >2)
            {
                state.response = false;
                
                // let stateResponse = state.response;
               
                console.log("Sending request to server")
                
                // let newFunction = (function(state) {
                //     return function(){
                //         console.log(state.response)
                //         state.response = true;
                //         console.log("Getting response from server")
                //         console.log(state.response)
                //         return state;
                //     }
                // }) (state) 
                
                // => {
                //     state.response = true;
                //     console.log("Getting response from server")
                //     return state
                // }

                // setTimeout(newFunction, 3000)
               
                setTimeout(() => {
                    // debugger
                    // state = newFunction
                    state.response = true;
                    console.log("Getting response from server")
                    // return stateResponse;
                    Store.Rerender(Store.getState());
                }, 3000);
               
            }
 
    }
    return state;
}

export const CheckIsInputNumberActionCreator = (inputValue) => {
    return {
        type: CHECK_IS_INPUT_NUMBER,
        inputValue: inputValue
    }
}
export const HandleInputValueActionCreator = (inputValue) => {
    return {
        type: HANDLE_INPUT_VALUE,
        inputValue: inputValue
    }
}
export default searchReducer;