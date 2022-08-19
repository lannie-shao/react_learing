import './App.css';
import {useReducer} from 'react';


function App() {
  //useReducer instead of use State because we use logic function here
  //to set the state
  const [checked,setChecked]=useReducer(checked=>!checked,false);


  return (   
     <div className='App'>
       <input type='checkbox'  
       value={checked}
       onChange={setChecked}
       />
       <label>{checked?'checked':'not checked'}</label>
    </div>
  );
}

export default App;
