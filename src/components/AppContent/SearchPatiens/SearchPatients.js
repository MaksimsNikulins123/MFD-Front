import Default from './Default/Default';
// import Searching from './Searching/Searching';
import SearchingContainer from './Searching/SearchingContainer';
// import SearchInput from './SearchInput/SearchInput';
import SearchInputContainer from './SearchInput/SearchInputContainer';
import styles from './SearchPatients.module.scss';

const SearchPatients = (props) => {


    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h2><span>Searching patients by personal code</span></h2>
                </div>
         
                < SearchInputContainer
                // searching={props.searching}
                // dispatch={props.dispatch}
                />
                {
                props.searching.length > 2 
                    ? 
                <SearchingContainer
                    // response={props.response}
                    // searchResult={props.searchResult}
                />  
                    :  
                <Default />
                }            
            </div>
        </div>
    )
}

export default SearchPatients