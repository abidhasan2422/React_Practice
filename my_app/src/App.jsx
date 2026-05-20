
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Card from './components/Card'
import './App.css'
import { use, useState } from 'react'

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


// function ProfileCard({isLoading,name,profession}){
//   return(
//     <div className="card">
//       {isLoading ?  (
//         <div>
//           <p>Loading nam .....</p>
//           <p> Loading Profession ....</p>
//           </div>
//       ) :(
//         <div>
//           <h2> {name }</h2>
//           <p> { profession }</p>
//           </div>
//       )
//     }
        
//     </div>
//      );
//   }
 
//   function App(){
//     return(
//       <>
//       <ProfileCard 
//       isLoading={true}
//       />
//       <ProfileCard 
//       name = "Abid Hasan"
//       profession="Backend Developer"
//       isLoading={false}
//       />

//       </>
//     )

//   }
//   export default App;

// import { useState } from 'react';

// function Counter() {

//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   function decrement() {
//     setCount(count - 1);
//   }

//   return (

//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "20px",
//         height: "100vh"
//       }}
//     >

//       <button
//         onClick={increment}
//         style={{
//           width: "100px",
//           height: "40px",
//           cursor: "pointer"
//         }}
//       >
//         +
//       </button>

//       <h1>{count}</h1>

//       <button
//         onClick={decrement}
//         style={{
//           width: "100px",
//           height: "40px",
//           cursor: "pointer"
//         }}
//       >
//         -
//       </button>

//     </div>
//   );
// }

// export default Counter;
// import { useState } from "react";

// function ColorPicker() {

//   const colors = [
//     "red",
//     "blue",
//     "green",
//     "orange",
//     "purple"
//   ];

//   const [bgColor, setBgColor] = useState("white");

//   const [hoverColor, setHoverColor] = useState("");

//   return (

//     <div
//       style={{
//         backgroundColor: hoverColor || bgColor,
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "20px"
//       }}
//     >

//       {colors.map((color, index) => (

//         <div
//           key={index}

//           onClick={() => setBgColor(color)}

//           onMouseEnter={() => setHoverColor(color)}

//           onMouseLeave={() => setHoverColor("")}

//           style={{
//             width: "60px",
//             height: "60px",
//             backgroundColor: color,
//             cursor: "pointer",
//             borderRadius: "50%",
//             border: "2px solid black"
//           }}
//         >

//         </div>

//       ))}

//     </div>
//   );
// }

// export default ColorPicker;

function SignUp(){
  const [name,setName] =useState("")
  const [email,setEmail] =useState("")
  const [password,setPassword] =useState("")
  const[error,setError]=useState("")
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleBlur(){
    if(!email.includes("@"))
      setError("Invalid Email");
    else{
      setError("");
    }
 
  }
  function handleSubmit(){
  setName("")
  setEmail("")
  setPassword("")
  setConfirmPassword("")
  }
  return(
    <div className="outer-div"
       style={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}
    >
      <div
      style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "320px",
    padding: "30px",
    gap: "15px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
  }}
    >
      <p> SignUp Form </p>
  
      <input type="text"
    
       value={name}
       onChange={(e)=>setName(e.target.value)}
  
      placeholder='Enter Your Name'
      /> 
      <input type="email"
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
      onBlur={handleBlur}
      placeholder='Enter Your Email'
      />
          {error && <p>{error}</p>}
      <input type="password"
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
      placeholder='Enter Your password'
      />
      <input type="password"
       value={confirmPassword}
       onChange={(e)=> setConfirmPassword(e.target.value)}
       placeholder='Confirm Password'
      />
      {
          confirmPassword &&
          password !== confirmPassword &&
          <p>Passwords do not match</p>
        }
    <button type="submit" onClick={handleSubmit}> Submit</button>
    <h2>Live Preview</h2>

      <p>Name: {name}</p>

      <p>Email: {email}</p>

      <p>Password: {password}</p>

      </div>
      </div>
  )
}
export default SignUp;