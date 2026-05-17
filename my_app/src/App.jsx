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
// 

//see Premium user name and badge also see unpremium name 

// function UserCard({name,isPremium}){
//   return(
//     <div className="card">
//       <h2> { name }</h2>
//       {isPremium && <p> 🌟 Premium user</p>}
//     </div>
//   );
// }
// function App(){
//   return(
//     <>
//     <UserCard 
//     name="Abid Hasan"
//     isPremium={true}
//     />
//     <UserCard 
//     name="Karim"
//     isPremium={false}
//     />

//     </>
//   );
// }
// export default App;

// just only see premium user.
// function UserCard({name,isPremium}){
//   return(
//    <>
//    { isPremium && <div>
//     <h2> { name }</h2>
//     <p> 🌟 Premium User </p>
//    </div>

//    }
//    </>
//   );
// }
// function App(){
//   return(
//     <>
//     <UserCard 
//     name="Abid Hasan"
//     isPremium={true}
//     />
//     <UserCard 
//     name="Karim"
//     isPremium={false}
//     />

//     </>
//   );
// }
// export default App;


function ProfileCard({isLoading,name,profession}){
  return(
    <div className="card">
      {isLoading ?  (
        <div>
          <p>Loading nam .....</p>
          <p> Loading Profession ....</p>
          </div>
      ) :(
        <div>
          <h2> {name }</h2>
          <p> { profession }</p>
          </div>
      )
    }
        
    </div>
     );
  }
 
  function App(){
    return(
      <>
      <ProfileCard 
      isLoading={true}
      />
      <ProfileCard 
      name = "Abid Hasan"
      profession="Backend Developer"
      isLoading={false}
      />

      </>
    )

  }
  export default App;