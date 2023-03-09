import GetUsersFromApi from "../../api/GetUsersFromApi"

export const FindPatiensThunkCreator = (searching, currentPage, usersCountOnPage) => {
    
        return (dispatch) => {
            GetUsersFromApi(searching, currentPage, usersCountOnPage, dispatch)
            
    }
}