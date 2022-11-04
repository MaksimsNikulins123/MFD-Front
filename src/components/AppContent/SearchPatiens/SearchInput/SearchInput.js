import { 
    CheckIsInputNumberActionCreator, 
    HandleInputValueActionCreator 
} from '../../../../redux/Store';
import styles from './SearchInput.module.scss';

const SearchInput = (props) => {

    let checkIsInputNumber = (e) => {
        let inputValue = e.key;
        props.dispatch(CheckIsInputNumberActionCreator(inputValue), e);
    }
    let handleSearchInput = (e) => {
        let inputValue = e.target.value;
        props.dispatch(HandleInputValueActionCreator(inputValue));
    }

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <input 
                placeholder='enter personal code' 
                type="text" 
                name="searching" 
                maxLength="12" 
                // onKeyPress={props.checkIsInputNumber} 
                onKeyPress={checkIsInputNumber} 
                // onKeyPress={props.dispatch} 
                onChange={handleSearchInput}
                // onChange={props.dispatch}
                value={props.searching}
                />
            </div>
        </div>
    )
}

export default SearchInput