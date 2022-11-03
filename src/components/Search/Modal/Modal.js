import { useState } from 'react';
import Form from './Form/Form';
import Form2 from './Form2/Form2';
// import axios from 'axios';
import styles from './Modal.module.scss';


const Modal = (props) => {

    const [firstModalWindow, setModal] = useState(false);
    const [secondModalWindow, setNewModal] = useState(false);
    const [toShow, setToShow] = useState(true);
    
    const toggleModal = () => {
        setModal(!firstModalWindow)
        setToShow(firstModalWindow)         
    }
    const nextModal = () => {
        setNewModal(!secondModalWindow)
        setToShow(secondModalWindow)
    }

    return(
        <div className={styles.modal_container}>
            <button 
            style={{display: toShow ? 'block' : 'none'}}
            onClick={toggleModal}
            className={styles.btn_modal}
            id='btnForma'
            >
            forma
            </button>
            

            <form  className={styles.form} >
            {/* <form className={styles.form} onSubmit={checkAction}> */}
            {firstModalWindow && (
                <div className={styles.modal}>
                    <div onClick={toggleModal} className={styles.overlay}></div>
                        <div className={styles.modal_content} >
                            <div className={styles.modal_closeButton}>
                                <button className="btn btn-danger " onClick={toggleModal}>X</button>
                            </div>
                                <Form 
                                // state={props.state} 
                                formData={props.formData}
                                handleInput={props.handleInput}
                                // handleSelectInput={props.handleSelectInput}
                                // saveInputValue={props.saveInputValue}
                                />
                            <div className={styles.modal_buttons}>
                                <button 
                                    type="button" 
                                    className="btn btn-secondary"
                                    onClick={toggleModal}>
                                        Atcelt
                                </button>
                                <button 
                                    onClick={() => {toggleModal() ; nextModal()}}
                                    type="button" 
                                    className="btn btn-success">
                                        Turpināt
                                </button>
                            </div>
                        </div>
                </div>
            )}
            {secondModalWindow && (
                <div className={styles.modal}>
                <div onClick={nextModal} className={styles.overlay}></div>
                    <div className={styles.modal_content} >
                        <div className={styles.modal_closeButton}>
                            <button className="btn btn-danger " onClick={nextModal}>X</button>
                        </div>
                            <Form2 
                            formData={props.formData}
                            handleInput={props.handleInput}
                            />
                        <div className={styles.modal_buttons}>
                            <button 
                                type="button" 
                                className="btn btn-secondary"
                                onClick={nextModal}>
                                    Atcelt
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-success"
                                onClick={() => {nextModal(); props.saveInputFormValues()}}
                              
                                >
                                    Saglabat
                            </button>
                        </div>
                    </div>
            </div>
            )}
            </form>
           
            
           
        </div>
    )
}
export default Modal;