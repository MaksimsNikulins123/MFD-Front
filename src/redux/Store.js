const CHECK_IS_INPUT_NUMBER = "CHECK-IS-INPUT-NUMBER";
const HANDLE_INPUT_VALUE = "HANDLE-INPUT-VALUE";
const GET_DATA_FROM_SERVER = "GET-DATA-FROM-SERVER";


let Store = {
    _state: {
        search: {
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
        },
        form: {
            buttonClick: false,
            modalWindowFirstActive: false,
            modalWindowSecondActive: false,
            formData: {
                name: '',
            },
            inputValue: "",
        }
    },
    
    getState() {
        return this._state;
    },

    Rerender() {
        console.log("state changed");
    },
    
    Subscribe(rerenderFunction) {
     
        this.Rerender = rerenderFunction;
    },
  
    Dispatch(action, e) 
    {

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
                this.getState().search.searching = inputValue;
                
                if(this.getState().search.searching.length >2)
                {
                    this.getState().search.response = true;
                    setTimeout(() => {
                        this.getState().search.response = false;
                        console.log("Sending request to server")
                        this.Rerender(this.getState());
                    }, 3000);
                }
            this.Rerender(this.getState());  
            }
    },
    HandleSearchInput(e) {
        let inputValue = e.target.value;
        this.getState.search.searching = inputValue;
    },
    // HandleButtonClick() {
    //     State.form.buttonClick = !State.form.buttonClick;
    //     // SetFirstModalWindowActive();
    //     // Rerender(State);
    // },

    // SetFirstModalWindowActive() {
    //     State.form.modalWindowFirstActive = !State.form.modalWindowFirstActive;
    //     Rerender(State);
    // },

    // SetSecondModalWindowActive() {
    //     State.form.modalWindowSecondActive = !State.form.modalWindowSecondActive;
    //     Rerender(State);
    // },
    
    // HandleInputValue(e) {
    //     // console.log(e);
    //     // debugger;
    //     // let InputValue = "";
    //     State.form.inputValue = e.target.value;
    //     Rerender(State);
    // },

    // SaveFormData() {
    //     State.form.formData.name = State.form.inputValue;
    //     State.form.inputValue = "";
    //     Rerender(State);
    // },

    Subscribe(observer) {
        this.Rerender = observer;
    },

    
    

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

export default Store;