import React, { useEffect, useState } from 'react';
import './App.css';


const App = () => {

  const[data,setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => setData(json))
  }, [])
  return (
    <div className="App">
      <h1>Fetch the data from API with FETCH method in ReactJs </h1>
        
        {data.map(item => <li key={item.id}>{item.id}.{item.title}</li>)}
    </div>
  );
}

export default App;
