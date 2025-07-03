import React from "react";
import ListOfCourses from "../listofcourses/listofcourses";
import FMessage from "../functional/message.functional";

class App extends React.Component {
  render() {
    // return <ListOfCourses />;
    return (
      <div>
        <FMessage msg="hi"/>
        <FMessage msg="hello"/>
        <FMessage msg="hola"/>
      </div>
    )
  }
}

export default App;