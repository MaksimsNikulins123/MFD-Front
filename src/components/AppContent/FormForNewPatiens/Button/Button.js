import styles from './Button.module.scss';

const Button = (props) => {

 return(
    <div className={styles.container}>
        <div className={styles.content}>
            <button onClick={props.toggleFirstModalWindowOnButtonClick}>Form to add new patiens info</button>
        </div>
    </div>
 )
}
export default Button;