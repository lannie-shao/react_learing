import './App.css';
import {useState, useEffect} from 'react';

function App() {
  
//use a Effect hook
const [emotion,setEmotion]=useState('happy');
const [secondary, setSecondary]=useState('peaceful');
const [car,setCar]=useState({
  model:"Mustang ",
  brand:"Ford",
  year:'1964',
  color:'yellow'
});

//effect once
useEffect(()=>{
  console.log(`It's ${emotion} right now.`);
},[]);

//effect will happen every emotion changed
useEffect(()=>
console.log(`It's ${secondary} around here.`),[emotion]
);

useEffect(()=>
console.log(`It's a ${car.color} ${car.brand} of ${car.year}`),[car]
);

  return (   
    <div>
      <h1>Hello from React.</h1>
      <h2>Current emotion is {emotion}.</h2>
      <button onClick={()=>setEmotion("excited")}>Excited</button>
      <button onClick={()=>setEmotion("tired")}>Tired</button>
      <h3>It's {secondary} around here.</h3>
      <p>I have a {car.color} car.</p>
      <button onClick={()=>setCar({color:"red",brand:'Holden', year:2022})}>Red</button>
    </div>
  );
}

export default App;
