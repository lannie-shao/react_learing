import './App.css';
import {useState} from 'react';

function App() {

//create State hook to initial the render element
const [title,setTitle]=useState("");
const [color,setColor]=useState("#000000");

//create a function to prevent refresh the page
const submit=(e)=>{
  e.preventDefault();

//render the value in the window
alert(`${title},${color}`);

//set back the input place
setTitle("");
setColor("#000000");
};
  return (   
     <div className='App'>
     <form onSubmit={submit}>
       <input value={title}
       onChange={(event)=>setTitle(event.target.value)}
       type='text' placeholder='color title..'/>
       <input value={color}
       onChange={(event)=>setColor(event.target.value)} 
       type='color'/>
       <button>Add</button>
     </form>
     </div>
  );
}

export default App;
