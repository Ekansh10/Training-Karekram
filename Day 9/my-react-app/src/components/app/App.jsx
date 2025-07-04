import React from "react";
import ListOfCourses from "../listofcourses/listofcourses";
import FMessage from "../functional/message.functional";
import Counter from "../functional/counter";
import Posts from "../posts/posts";
import CourseDetails from "../functional/coursedetails"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// Link prevents reloading page 
// 
function App(){
  return(
    <BrowserRouter>  
    <nav class="navbar bg-body-tertiary" width="50px">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">Courses</Link> |
        <Link class="navbar-brand" to="/posts">Posts</Link> |
        <Link class="navbar-brand" to="/counter">Counter</Link>
      </div>
    </nav>
    <Routes>
      <Route path="/" Component={ListOfCourses}/>
      <Route path="/posts" Component={Posts}/>
      <Route path="/counter" Component={Counter}/>
      <Route path="/coursedetails" Component={CourseDetails}/>
      <Route
      path="*" // anything else
      element={
        <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*R3Q_XDNGBdBTrrT8.png"></img>
      }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;

// class App extends React.Component {
//   render() {
//     // return <ListOfCourses />;
//     return (
//       <div>
//         <FMessage msg="hi"/>
//         <FMessage msg="hello"/>
//         <FMessage msg="hola"/>
//       </div>
//     )
//   }
// }

// function App(){ // App as a functional component()
  // return (
  //     <div>
  //       <Counter />
  //       <Posts />
  //     </div>
  //   )
  // return <ListOfCourses />
// }

// var App = () => <div> // can be done this ways as well
//         <FMessage msg="hi"/>
//         <FMessage msg="hello"/>
//         <FMessage msg="hola"/>
//       </div>
