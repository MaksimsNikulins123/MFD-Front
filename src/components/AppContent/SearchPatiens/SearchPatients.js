import Default from './Default/Default';
import Searching from './Searching/Searching';
import SearchInput from './SearchInput/SearchInput';
import styles from './SearchPatients.module.scss';

const SearchPatients = (props) => {


    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2><span>Searching patients by personal code</span></h2>
                </div>
         
                < SearchInput 
                search={props.search}
                dispatch={props.dispatch}
                // checkIsInputNumber={props.search.checkIsInputNumber}
                // handleSearchInput={props.search.handleSearchInput}
                />
                {
                props.search.searching.length > 2 
                    ? 
                <Searching 
                    response={props.search.response}
                    searchResult={props.search.searchResult}
                />  
                    :  
                <Default />
                }            
            </div>
        </div>
    )
}

export default SearchPatients