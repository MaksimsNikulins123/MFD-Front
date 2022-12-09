import styles from './Pagination.module.scss';

const Pagination = (props) => {

    let pages = []

    // let pagesAll = Math.ceil(props.usersTotalCount / props.usersCountOnPage)

    for (let index = 1; index <= props.pagesAll; index++) {
            pages.push(index);
        }
    let pagesArray = pages.map((page) => {
        if(page == props.currentPage) {
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
                    <div className={styles.pageNumber}>
                        {page}
                    </div>
                </li>
       )   
    }
    )
    

    return(
            <div className={styles.container}>
                <div className={styles.pagination}>
                    <div>
                        <button className={styles.buttonPagination} onClick={props.changeCurrentPageToBack} role="button">back</button>
                    </div>
                    <div className={styles.pages}>
                        {pagesArray}
                    </div>
                    <div>
                        <button className={styles.buttonPagination} onClick={props.changeCurrentPageToNext} role="button">next</button>
                    </div>
                    
                </div>
            </div>
    )
}

export default Pagination