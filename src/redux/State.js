
let Rerender = () => {
console.log("state changed");
}

const CheckIsInputNumber = (e) => {
    let input = String.fromCharCode(e.which);

    if(!(/[0-9 -]/.test(input))){
        e.preventDefault();
    }
}
const HandleSearchInput = (e) => {
    let inputValue = e.target.value;

    State.search.searching = inputValue;
    
    if(State.search.searching.length >2)
    {
        State.search.response = true;
        setTimeout(() => {
            State.search.response = false;
            Rerender(State)
        }, 3000);
    }
        Rerender(State);
    }
const HandleButtonClick = () => {
    State.form.buttonClick = !State.form.buttonClick;
    // SetFirstModalWindowActive();
    // Rerender(State);
}

const SetFirstModalWindowActive = () => {
    State.form.modalWindowFirstActive = !State.form.modalWindowFirstActive;
    Rerender(State);
}

const SetSecondModalWindowActive = () => {
    State.form.modalWindowSecondActive = !State.form.modalWindowSecondActive;
    Rerender(State);
}
const HandleInputValue = (e) => {
    // console.log(e);
    // debugger;
    // let InputValue = "";
    State.form.inputValue = e.target.value;
    Rerender(State);

};

const SaveFormData = () => {
    State.form.formData.name = State.form.inputValue;
    State.form.inputValue = "";
    Rerender(State);
}

const Subscribe = (observer) => {
    Rerender = observer;
}

let State = {
    subscribe: Subscribe,
    search: {
        checkIsInputNumber: CheckIsInputNumber,
        handleSearchInput: HandleSearchInput,
        response: false,
        searching: "",
        searchResult :[
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
        formData:{
            name: '',
        },
        inputValue: "",
        setFirstModalWindowActive: SetFirstModalWindowActive,
        setSecondModalWindowActive: SetSecondModalWindowActive,
        handleButtonClick: HandleButtonClick,
        handleInputValue: HandleInputValue,
        saveFormData: SaveFormData
    }
};

export default State