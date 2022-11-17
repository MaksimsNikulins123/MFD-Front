// import './App.css';
import AppContent from './components/AppContent/AppContent';
// import state from './redux/State';
// import {InputValue, HandleInputValue} from './redux/State';
// import FormForNewPatients from './components/FormForNewPatiens/FormForNewPatients';
// import SearchPatients from './components/SearchPatiens/SearchPatients';
// import Search from './components/Search/Search';

function App(props) {
  // debugger
  return (
    <>
      
      {/* <Search /> */}
  
      {<AppContent 
        // state={props.state}
        // checkIsInputNumber={props.checkIsInputNumber}
          // dispatch={props.dispatch}
        />}
      {/* {<SearchPatients />}
      {<FormForNewPatients />}    */}
    </>
  );
}

export default App;
