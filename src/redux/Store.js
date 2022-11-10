import formReducer from "./form-reducer";
import searchReducer from "./search-reducer";




let Store = {
    _state: {
        search: {
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
        this.getState().search = searchReducer(this.getState().search, action, e);
        this.getState().form = formReducer(this.getState().form, action)
        this.Rerender(this.getState());
    },
    Subscribe(observer) {
        this.Rerender = observer;
    },
}

export default Store;