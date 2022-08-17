import './App.css';
import {useState} from 'react'

function App() {
  //use a hook
const [emotion,setEmotion]=useState('happy');

  return (   
    <div>
      <h1>Hello from React- App.</h1>
      <h2>Current emotion is {emotion}.</h2>
      <button onClick={()=>setEmotion("excited")}>Excited</button>
      <button onClick={()=>setEmotion("tired")}>Tired</button>
    </div>
  );
}

export default App;
