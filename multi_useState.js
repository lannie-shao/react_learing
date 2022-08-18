import './App.css';
import {useState, useEffect} from 'react'

function Car(){
  const [brand, setBrand]=useState('Ford');
  const [model, setModel]=useState('Mustang');
  const [color, setColor]=useState('yellow');
  const [year, setYear]=useState('1964');

  return(
    <div>
      <p>I have a {brand} car.</p>
      <p>It's a {color} {model} of {year}</p>
      <button onClick={()=>setColor('Red')}>Red</button>
      <button onClick={()=>setBrand('Holden')}>Holden</button>
      <button onClick={()=>setModel('Focus')}>Focus</button>
      <button onClick={()=>setYear('1988')}>1988</button>
    </div>
  );
}

function App() {
  
//use a hook
const [emotion,setEmotion]=useState('happy');
const [secondary, setSecondary]=useState('peaceful');

//effect once
useEffect(()=>{
  console.log(`It's ${emotion} right now.`);
},[]);

//effect will happen every emotion changed
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
      <Car  />
    </div>
  );
}

export default App;
