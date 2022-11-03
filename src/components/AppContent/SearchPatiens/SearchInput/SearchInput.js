import styles from './SearchInput.module.scss';

const SearchInput = (props) => {

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <input 
                placeholder='enter personal code' 
                type="text" name="searching" 
                maxLength="12" 
                // onKeyPress={props.checkIsInputNumber} 
                onKeyPress={props.dispatch} 
                // onChange={props.handleSearchInput}
                onChange={props.dispatch}
                value={props.search.searching}
                />
            </div>
        </div>
    )
}

export default SearchInput