
import Preloader from '../../../Preloader/Preloader';
import SearchingResultContainer from './SearchingResult/SearchingResultContainer';

const Searching = (props) => {

    return(
            <>  
                {
                    props.loading
                    ?
                    <Preloader />
                    :
                    <SearchingResultContainer />
                }
            </>
    )
}

export default Searching