import PatientsApi from "../../api/PatientsApi"

export const FindPatiensThunkCreator = (searching, currentPage, usersCountOnPage) => {
        return (dispatch) => {
        // FindPatients(searching, currentPage, usersCountOnPage, dispatch)      
        PatientsApi.FindPatients(searching, currentPage, usersCountOnPage, dispatch)      
    }
}