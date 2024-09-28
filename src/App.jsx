// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Home from './components/Home'
// import About from './components/About'
// import Nav from './components/Nav'

// function App() {
 
//  let data = "data from the server"
//  let subject = ["math","english"]
//  let profile = {
//   username : "nikita",
//   age : 20,
//   email :"nikita@keshri.com",
//  }

//   return (
//     <>
//    <Home/>
//    <About/>
//    <Nav/>
//    <h1>{data}</h1>
//    <h2>{subject}</h2>
//    <h3>{profile.username}</h3>
//     </>

//   )
// }






// rendring join a view
// const App=()=> {

//   let info= [
//    {
//     name : "nikita"
//    },
//    {
//     name : "apple"
//    },
//    {
//     name : "apple"
//    },
//   ];
//   let x = info.map((item, index) => {
//     return (
//       <div key ={index}>
//         <h1>name:   {item.name}</h1>
//         {/* <h1>name:   {item.name}</h1> */}
//         <p>virson : {item.virson}</p>
//         <p>status : {item.status}</p>
//       </div>
//     );
  
// });
// return <div>{x}</div>
// }
// export default App



// create a form which takes fistname,lasttime username,email,contact
// on submitting the form it should console te value on object


const App = () => {
    const submitHandler = (e)=>{
        e.preventDefault();
        const {userame,fistname,lastname,,email} = e.target;

        const user = {
            username:username.value 
            firstname: firstname.value
            lastname:lastname.value
        };
    }
  return (
    <div classname = "p-3 rounded w-[80%">
      <form action="">
        <input type="text" placeholder='firstname' />
        <input type="text" placeholder='lastname' />
        <input type="text" placeholder='username' />
        <input type="text" placeholder='email' />
        <input type="text" placeholder='contact' />


        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App


