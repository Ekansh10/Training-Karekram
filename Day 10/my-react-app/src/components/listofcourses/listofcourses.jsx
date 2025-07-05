import React, { Component, useState, useEffect } from "react";
import Course from "../course/course.component";
import axios from "axios";
import { useParams } from "react-router-dom";

var ListOfCourses = (props) => {
    const[courses, setCourses] = useState([]); // 1. states get created

    const deleteCourse= id =>{
      const newCourses = courses.filter(c => c.id !== id);
      setCourses(newCourses);
    }
    useEffect(function(){ // 3. useEffect is called after every rendering, (thus goes in the cyclic loop of api calls for async operation), because async operation
        // to stop this cycle we use Dependency list
        axios
        .get("http://localhost:3000/courses")
        .then(res => setCourses(res.data)); // here state changes and the jsx is rendered again
    }, []); 
    return (
      <div className="row g-5">
        {courses.map(course => (
          <Course coursedetails={course} key={course.id} deletecourse = {id => deleteCourse(id)}/> // here we given a key for the component
        ))}
      </div>
    );
  }

export default ListOfCourses;
