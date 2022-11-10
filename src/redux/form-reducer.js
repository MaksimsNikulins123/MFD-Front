const TOGGLE_BUTTON_VISIBILITY = "TOGGLE-BUTTON-VISIBILITY";
const TOGGLE_FIRST_MODAL_WINDOW_ACTIVITY = "TOGGLE-FIRST-MODAL-WINDOW-ACTIVITY";
const HANDLE_FIRST_MODAL_WINDOW_INPUT_VALUE = "HANDLE-FIRST-MODAL-WINDOW-INPUT-VALUE";
const TOGGLE_SECOND_MODAL_WINDOW_ACTIVITY = "TOGGLE-SECOND-MODAL-WINDOW-ACTIVITY";
const SAVE_FORM_DATA = "SAVE-FORM-DATA";


const formReducer = (state, action) => {

    if(action.type === TOGGLE_BUTTON_VISIBILITY) {
        let buttonActive = state.buttonClick;
        state.buttonClick = !buttonActive;
        state.inputValue = "";
        // this.Rerender(this.getState());
    }
    else if(action.type === TOGGLE_FIRST_MODAL_WINDOW_ACTIVITY) {
        let firstModalWindowActive = state.modalWindowFirstActive;
        state.modalWindowFirstActive = !firstModalWindowActive;
        // this.Rerender(this.getState());
    }
    else if(action.type === HANDLE_FIRST_MODAL_WINDOW_INPUT_VALUE)
    {
        let inputValue = action.inputValue;
        state.inputValue = inputValue;
        // this.Rerender(this.getState());
     
    }
    else if(action.type === TOGGLE_SECOND_MODAL_WINDOW_ACTIVITY)
    {
        let secondModalWindowActive = state.modalWindowSecondActive;
        state.modalWindowSecondActive = !secondModalWindowActive;
        // this.Rerender(this.getState());
    }
    else if(action.type === SAVE_FORM_DATA)
    {
      console.log('Save')
    }
    return state;
}
export const ToggleButtonVisibilityActionCreator = () => {
    return {
        type: TOGGLE_BUTTON_VISIBILITY,
    }
}
export const ToggleFirstModalWindowActivityActionCreator = () => {
    return {
        type: TOGGLE_FIRST_MODAL_WINDOW_ACTIVITY
    }
}
export const HandleFirstModalWindowInputValueActionCreator = (inputValue) => {
    return {
        type: HANDLE_FIRST_MODAL_WINDOW_INPUT_VALUE,
        inputValue: inputValue
    }
}
export const ToggleSecondModalWindowActivityActionCreator = () => {
    return {
        type: TOGGLE_SECOND_MODAL_WINDOW_ACTIVITY,
    }
}
export const SaveFormDataActionCreator = () => {
    return {
        type: SAVE_FORM_DATA,
    }
}
export default formReducer;