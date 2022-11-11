import styles from './SearchInput.module.scss';

const SearchInput = (props) => {

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <input 
                placeholder='enter personal code' 
                type="text" 
                name="searching" 
                maxLength="12" 
                onKeyPress={props.checkIsInputNumber} 
                onChange={props.handleSearchInput}
                value={props.searching}
                />
            </div>
        </div>
    )
}

export default SearchInput