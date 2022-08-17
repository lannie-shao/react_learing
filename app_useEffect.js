import './App.css';
import {useState, useEffect} from 'react'

function App() {
  
//use a hook
const [emotion,setEmotion]=useState('happy');
const [secondary, setSecondary]=useState('peaceful')

//effect once
useEffect(()=>{
  console.log(`It's ${emotion} right now.`);
},[]);

//effect will happen every time the emotion changed
useEffect(()=>
console.log(`It's ${secondary} around here.`),[emotion]
);
  return (   
    <div>
      <h1>Hello from React.</h1>
      <h2>Current emotion is {emotion}.</h2>
      <button onClick={()=>setEmotion("excited")}>Excited</button>
      <button onClick={()=>setEmotion("tired")}>Tired</button>
      <h3>It's {secondary} around here.</h3>
    </div>
  );
}

export default App;
