import Default from './Default/Default';
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
         
                < SearchInputContainer />
                {
                props.searching.length > 2
                    ? 
                <SearchingContainer />  
                    :  
                <Default />
                }            
            </div>
        </div>
    )
}

export default SearchPatients