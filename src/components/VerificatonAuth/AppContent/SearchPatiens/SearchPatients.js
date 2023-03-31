import Default from './Default/Default';
import LogoutButtonContainer from './LogoutButton/LogoutButtonContainer';
import SearchingContainer from './Searching/SearchingContainer';
import SearchInputContainer from './SearchInput/SearchInputContainer';
import styles from './SearchPatients.module.scss';

const SearchPatients = (props) => {


    return(
        <div className={styles.container}>
            <LogoutButtonContainer />
            
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