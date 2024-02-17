import axios from 'axios';
import './App.css';
import { useState, useEffect } from "react";
import User from './Components/User';


function App() {
  const [api, setApi] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res=>setApi(res.data))
  }, []);
  return (
    <div className="App">
      <User CreateApi={api}/> {/*CreateApi props létrehozása, melynek a paramétere az api kezdőérték változó*/}
      {
             
        api.map((u)=>{
          return <User  id={u.id} name={u.name} username={u.username} email={u.email}/>
        })
      }
      
      </div>
  );
}
export default App;
