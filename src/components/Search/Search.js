import { Component } from 'react';
import styles from './Search.module.scss';
import axios from 'axios';
import Modal from './Modal/Modal';
import SearchResult from './SearchResult/SearchResult';
// import NoResult from './../NoResult/NoResult';
import Preloader from './Preloader/Preloader';

class Search extends Component {

    constructor () {
        super();
        this.state = {
            formData: {
                areja_forma: "",
                glotada1:"",
                glotada2: "",
            },
            startInputTimeCounter:'',
            searching: '',
            gettedApiPatientsData: [],
            errored: false,
            requestInProcess: false,
            
        };
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handlePatientInputInfo = this.handlePatientInputInfo.bind(this);
      }

    componentDidMount = () => {
        let dateVariable = new Date();
        let currentInputTime = dateVariable.getTime();
        this.state.startInputTimeCounter = currentInputTime;
      }
    handleSearchInput (e) {
        let inputValue = e.target.value;
        this.setState({ [e.target.name]: inputValue });
      
        let dateVariable = new Date();
        let inputTime = dateVariable.getTime();

        let timeOut = inputTime - this.state.startInputTimeCounter;
        if(timeOut >= 2000 && inputValue.length >=3) {
            this.state.startInputTimeCounter = inputTime;
            this.getDataFromDataBase(inputValue);
        }
      }
    handlePatientInputInfo = (e) => {
        let inputValue = e.target.value;
        let inputName = e.target.name;
        console.log(inputName)
        console.log(inputValue)

        
        this.setState((state) => {
            return {inputValue: state.formData[inputName] = inputValue}
        })
    }

   getDataFromDataBase = async (inputValue) => {
       console.log('getting data from Api');
       console.log(inputValue);
        this.setState({requestInProcess: true})
        await axios.get(`http://127.0.0.1:8000/api/V1/patients`)
    //    await axios.get(`http://127.0.0.1:8000/api/V1/patients/${inputValue}`)
       .then(response => {
        this.setState(
            {
                gettedApiPatientsData : response.data.data,
                requestInProcess: false
            })
       })
       .catch(error => {
        console.log(error)
        this.setState({errored: true})
       })
   }
   savePatientInfo = async () => {
        // e.preventDefault();
       console.log('saving data into DB');
       const response = await axios.post(`http://127.0.0.1:8000/api/V1/add_patient`, this.state)
    .then(response => { 
        console.log(response);
    })
    .then(error => {
        console.log(error);
    })
}
// toggleSettingsDialogue = (inputName, inputValue) => {
    
  
//  }
saveInputFormValues = () => {
    console.log("submit")
    console.log(this.state.formData)


}



    checkIsInputNumber = (e) => {
        let input = String.fromCharCode(e.which);

        if(!(/[0-9 -]/.test(input))){
            e.preventDefault();
        }
    }



    render() {
        return(
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h2>Meklēt pacientu datu bāzē pēc pacienta personas koda</h2>
                    </div>
                    <div className={styles.input}>
                        <div className={styles.input_group}>
                            <input type="text" name="searching" maxLength="12" 
                                onKeyPress={this.checkIsInputNumber} 
                                onChange={this.handleSearchInput}  
                                value={this.state.searching}
                            />
                        </div>
                    </div>
                    <div className={styles.searchResult} >
                        {
                            this.state.requestInProcess
                                ?
                                <Preloader />
                                :
                                <SearchResult 
                                gettedApiPatientsData={this.state.gettedApiPatientsData} 
                                errored={this.state.errored}
                                searching={this.state.searching} 
                                />
                        }        
                    </div>
                    
                </div>
                  <Modal 
                    formData={this.state.formData}
                    handleInput={this.handlePatientInputInfo}
                    saveInputFormValues={this.saveInputFormValues}
                  />
            </div>
        )
    }
}
    
   


export default Search