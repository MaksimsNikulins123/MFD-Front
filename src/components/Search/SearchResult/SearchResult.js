import styles from './SearchResult.module.scss';
import Result from './Result/Result';
import NoResult from './NoResult/NoResult';


const SearchResult = (props) => {

    return(
        <div className={styles.result}>
            {
                props.searching.length > 2 && !props.errored
                    ? 
                    <Result gettedApiPatientsData={props.gettedApiPatientsData}/>
                    :
                    <NoResult errored={props.errored}/>           
            }
        </div>
    )
}

export default SearchResult