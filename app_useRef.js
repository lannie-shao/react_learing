import './App.css';
import {useRef} from 'react';

function App() {

//create ref hook to reach the render element
//(this is the first way to use Ref)
const colorTitle=useRef();
const hexColor=useRef();

//create a function to prevent refresh the page
const submit=(e)=>{
  e.preventDefault();

//get the value from the submitting ref element
const title=colorTitle.current.value;
const color=hexColor.current.value;

//render the value in the window
alert(`${title},${color}`);

//set the input place blank
colorTitle.current.value="";
hexColor.current.value="";
};
  return (   
     <div className='App'>
     <form onSubmit={submit}>
       <input ref={colorTitle} type='text' placeholder='color title..'/>
       <input ref={hexColor} type='color'/>
       <button>Add</button>
     </form>
     </div>
  );
}

export default App;
