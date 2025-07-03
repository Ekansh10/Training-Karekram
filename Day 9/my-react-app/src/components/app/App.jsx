import React from "react";
import ListOfCourses from "../listofcourses/listofcourses";
import FMessage from "../functional/message.functional";
import Counter from "../functional/counter";
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

function App(){ // App as a functional component()
  return (
      <div>
        <Counter />
      </div>
    )
}

// var App = () => <div> // can be done this ways as well
//         <FMessage msg="hi"/>
//         <FMessage msg="hello"/>
//         <FMessage msg="hola"/>
//       </div>

export default App;