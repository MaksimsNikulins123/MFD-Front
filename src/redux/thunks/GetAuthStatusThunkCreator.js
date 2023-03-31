
import { GetAuthStatusActionCreator } from "../auth-reducer"



export const GetAuthStatusThunkCreator = (value) => {
    // debugger
    return (dispatch) => {
        dispatch(GetAuthStatusActionCreator(value))

    }

}