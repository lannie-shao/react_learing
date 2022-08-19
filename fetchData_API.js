import './App.css';
import {useState,useEffect} from 'react';

//display the data in this component
function GithubUser({props}){
   return(
     <div>
      <h1>{props.name}</h1>
      <p>{props.location}</p>
      <img src={props.avatar_url} alt={props.name} height={200} />
     </div>
   );
}

function App() {
 //use State hook to initial the data
 const [data,setData]=useState(null);
 const [loading,setLoading]=useState(null);
 const [error,setError]=useState(null);
 
 //use Effect hook to set the data after fetch the data from API
 useEffect(()=>{
  fetch(`https://api.github.com/users/moonhighway`)
  .then((response)=>response.json())
  .then(setLoading(null))
  .then(setData)
  .catch((error)=>setError(error));
 },[]);
 
 if(!data) return <p>It's loading....</p>
 if(error) return <p>{error}</p>
  return (   
     <div className='App'>
       <GithubUser 
           props={data}       
       />
     </div>
  );
}

export default App;
