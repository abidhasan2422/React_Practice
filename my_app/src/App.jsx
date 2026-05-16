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


// function App() {
//   return (
//     <div>

//       <Card
//         name="Abid"
//         role="Frontend Developer"
//         avatar="https://i.pravatar.cc/150?img=1"
//       />

//       <Card
//         name="Rahim"
//         role="Backend Developer"
//         avatar="https://i.pravatar.cc/150?img=2"
//       />

//       <Card
//         name="Karim"
//         role="UI Designer"
//         avatar="https://i.pravatar.cc/150?img=3"
//       />

//     </div>
//   );
// }

// export default App;
// const people = [
//   'Creola Katherine Johnson: mathematician',
//   'Mario José Molina-Pasquel Henríquez: chemist',
//   'Mohammad Abdus Salam: physicist',
//   'Percy Lavon Julian: chemist',
//   'Subrahmanyan Chandrasekhar: astrophysicist'
// ];

//  function List() {
//   const listItems = people.map(person =>
//     <li>{person}</li>
//   );
//   return <ul>{listItems}</ul>;
// }
// export default List;

//import  People  from './components/data';
// function App(){
//   const listItem = People.map( person => 
//     <li key={person.id}>
//       <img src={person.image} alt={person.name} />
//       <p>
//         <b>{person.name}</b> {' '+ person.profession + ' '}   known for {person.accomplishment}
//       </p>

//     </li>
//   );
//     return <ul>{listItem}</ul>;
// }
// export default App;
import People from './components/data';

function App() {

  const chemists = People.filter(
    person => person.profession === 'chemist'
  );

  const others = People.filter(
    person => person.profession !== 'chemist'
  );

  return (

    <>

      <h1>Chemists</h1>

      <ul>
        {chemists.map(person =>

          <li key={person.id}>

            <img
              src={person.image}
              alt={person.name}
              width="150"
            />

            <p>
              <b>{person.name}</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>

          </li>
        )}
      </ul>

      <h1>Everyone Else</h1>

      <ul>
        {others.map(person =>

          <li key={person.id}>

            <img
              src={person.image}
              alt={person.name}
              width="150"
            />

            <p>
              <b>{person.name}</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>

          </li>
        )}
      </ul>

    </>
  );
}

export default App;