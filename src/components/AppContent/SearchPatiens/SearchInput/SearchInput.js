import styles from './SearchInput.module.scss';

const SearchInput = (props) => {
debugger
    const checkIsInputNumber = (e) => {
                let input = e.key;
                if (!(/[0-9 -]/.test(input))) {
                    e.preventDefault();
                }
            }
    const handleSearchInput = (e) => {
        let inputValue = e.nativeEvent.data;
            props.handleSearchInput(inputValue)
                // let inputValue = e.target.value;
                // props.dispatch(HandleInputValueActionCreator(inputValue));
            }
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <input 
                placeholder='enter personal code' 
                type="text" 
                name="searching" 
                maxLength="12" 
                onKeyPress={checkIsInputNumber} 
                onChange={handleSearchInput}
                value={props.searching}
                />
            </div>
        </div>
    )
}

export default SearchInput