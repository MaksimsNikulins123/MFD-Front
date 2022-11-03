let Store = {
    _state: {
        search: {
            response: false,
            searching: "",
            searchResult: [{
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

    Dispatch(action) {
        debugger
        let input = action.key;
        console.log(input);
        if(action.type === "CHECK-IS-INPUT-NUMBER")
        {
            // let input = String.fromCharCode(e.which);
            // let input = String.fromCharCode(action.key);
            let input = action.key;

            if (!(/[0-9 -]/.test(input))) {
                // e.preventDefault();
                action.preventDefault();
                console.log(input);
            }
        }
    },
    CheckIsInputNumber(e) {
        let input = String.fromCharCode(e.which);

        if (!(/[0-9 -]/.test(input))) {
            e.preventDefault();
        }
        
    },
    HandleSearchInput(e) {
        // debugger
        let inputValue = e.target.value;
        console.log(inputValue);
        this.getState.search.searching = inputValue;

        // if (this._state.search.searching.length > 2) {
        //     this._state.search.response = true;
        //     setTimeout(() => {
        //         this._state.search.response = false;
        //         this.Rerender(this._state)
        //     }, 3000);
        // }
        // this.Rerender(this._state);
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


export default Store;