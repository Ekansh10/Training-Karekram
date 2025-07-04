import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "../rating/rating";

// Class component for App


// export default class Course extends Component {
//   state = {currentLikes : this.props.coursedetails.likes};
//   incrementLikes(){
//     console.log("U Clicked !");
//     // this.state.currentLikes++;// states are immutable
     
//     this.setState({currentLikes : this.state.currentLikes+1}); // it assigns new object to currentLikes state for every object
//     console.log(this.state.currentLikes);
//   }

//   render() {
//     let stars = this.props.coursedetails.rating;
//     let starArray = [];
//     for (let i = 0; i < stars; i++) {
//       starArray.push(<i className="fa-solid fa-star" key={i} style={{ color: "gold" }}></i>);
//     }
    
//     return (
//     <div className="col-md-4">
//       <div className="card">
//         <Link to ="/coursedetails">
//         <img src={this.props.coursedetails.imageUrl} className="card-img-top" alt="" width="200px"/>
//         </Link>
        
//         <h1 className="card-title">{this.props.coursedetails.title}</h1>
//         <p className="card-text">₹ {this.props.coursedetails.price}</p>
//         <p className="card-text">Rating : {starArray}</p>

//         <button
//         onClick={()=>this.incrementLikes()
//         }
//         className="btn btn-primary" 
//         >
//         <i className="fa-solid fa-thumbs-up" width="100px" height="10px"></i> {this.state.currentLikes}</button>
//       </div>
//     </div>
//     );
//   }
// }


// Functional Component for App

function Course(props){

  const[currLikes, setCurrLikes] = useState(props.coursedetails.likes);
  
    return (
    <div className="col-md-4">
      <div className="card">
        <Link to ={`/coursedetails/${props.coursedetails.id}`}>
        <img src={props.coursedetails.imageUrl} className="card-img-top" alt="" width="200px"/>
        </Link>
        
        <h1 className="card-title">{props.coursedetails.title}</h1>
        <p className="card-text">₹ {props.coursedetails.price}</p>
        <div className="card-text">Rating : <Rating noofstars={props.coursedetails.rating}/></div>

        <button
        onClick={()=>setCurrLikes(currLikes + 1)
        }
        className="btn btn-primary" 
        >
        <i className="fa-solid fa-thumbs-up" width="100px" height="10px"></i> {currLikes}</button>
      </div>
    </div>
    );
}

export default Course;
