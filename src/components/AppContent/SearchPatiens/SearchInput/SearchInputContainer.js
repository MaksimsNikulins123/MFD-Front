import {HandleInputValueActionCreator} from '../../../../redux/search-reducer';
import SearchInput from './SearchInput';

const SearchInputContainer = (props) => {

    const checkIsInputNumber = (e) => {
        let input = e.key;
        if (!(/[0-9 -]/.test(input))) {
            e.preventDefault();
        }
    }
    const handleSearchInput = (e) => {
        let inputValue = e.target.value;
        props.dispatch(HandleInputValueActionCreator(inputValue));
    }

    return(
        <SearchInput 
        searching={props.searching}
        checkIsInputNumber={checkIsInputNumber}
        handleSearchInput={handleSearchInput}
        />
    )
}

export default SearchInputContainer