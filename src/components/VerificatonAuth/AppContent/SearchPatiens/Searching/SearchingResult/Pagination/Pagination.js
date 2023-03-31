import styles from './Pagination.module.scss';

const Pagination = (props) => {

    let pages = []

    for (let index = 1; index <= props.pagesAll; index++) {
            pages.push(index);
        }
    let pagesArray = pages.map((page) => {
        if(page === props.currentPage) {
            return (
                <li key={page}>
                    <div className={styles.active} >
                        {page}
                    </div>
                </li> 
            )
        }
        else
            return(
                <li key={page}>
                    <div>
                        {page}
                    </div>
                </li>
       )   
    }
    )
    const changeCurrentPageToNext = () => {
        props.changeCurrentPageToNext(
            props.currentPage, 
            props.pagesAll, 
            props.searching, 
            props.usersCountOnPage)
    }

    const changeCurrentPageToPrevious = () => {
        props.changeCurrentPageToPrevious(
            props.currentPage, 
            props.searching, 
            props.usersCountOnPage)
    }

    return(
            <div className={styles.container}>
                <div className={styles.pagination}>
                    <div>
                        <button className={styles.buttonPagination} onClick={changeCurrentPageToPrevious} >back</button>
                    </div>
                    <div className={styles.pages}>
                        {pagesArray}
                    </div>
                    <div>
                        <button className={styles.buttonPagination} onClick={changeCurrentPageToNext}>next</button>
                    </div>
                    
                </div>
            </div>
    )
}

export default Pagination