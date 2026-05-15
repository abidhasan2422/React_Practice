import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Card from './components/Card'

import './App.css'

// function App(){
//   const name = "Abid";
//   const isOnline = true;
//   const myImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKOXy7GSVGKOL7rH7ttHPvOkQA17W0weeAg&s"


// return (
//   <div className="container">
  
//    <h1> Hello {name}</h1>
   
//    <p>
//     status: {isOnline ? "Online": "Offline"}
//    </p>

//   </div>
// );
// }
// export default App


function App() {
  return (
    <div>

      <Card
        name="Abid"
        role="Frontend Developer"
        avatar="https://i.pravatar.cc/150?img=1"
      />

      <Card
        name="Rahim"
        role="Backend Developer"
        avatar="https://i.pravatar.cc/150?img=2"
      />

      <Card
        name="Karim"
        role="UI Designer"
        avatar="https://i.pravatar.cc/150?img=3"
      />

    </div>
  );
}

export default App;