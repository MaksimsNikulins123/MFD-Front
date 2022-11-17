import {HandleInputValueActionCreator} from '../../../../redux/search-reducer';
import SearchInput from './SearchInput';
import { connect } from 'react-redux';

// const SearchInputContainer = (props) => {

//     const checkIsInputNumber = (e) => {
//         let input = e.key;
//         if (!(/[0-9 -]/.test(input))) {
//             e.preventDefault();
//         }
//     }
//     const handleSearchInput = (e) => {
//         let inputValue = e.target.value;
//         props.dispatch(HandleInputValueActionCreator(inputValue));
//     }

//     return(
//         <SearchInput 
//         searching={props.searching}
//         checkIsInputNumber={checkIsInputNumber}
//         handleSearchInput={handleSearchInput}
//         />
//     )
// }
const mapStateToProps = (state) => {
    debugger
    return {
        searching: state.search.searching
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        // checkIsInputNumber: (e) => {
        //     // console.log(e)
        //     // let input = e.key;
        //     //     if (!(/[0-9 -]/.test(input))) {
        //     //         e.preventDefault();
        //     //     }
        // },
        handleSearchInput: (inputValue) => {
            // console.log(e)
            // let inputValue = e.target.value;
            dispatch(HandleInputValueActionCreator(inputValue));
        }
    }
}

const SearchInputContainer = connect(mapStateToProps, mapDispatchToProps)(SearchInput)

export default SearchInputContainer