import React, { Component } from "react";

export default class Course extends Component {
  state = {currentLikes : this.props.coursedetails.likes};
  incrementLikes(){
    console.log("U Clicked !");
    // this.state.currentLikes++;// states are immutable
     
    this.setState({currentLikes : this.state.currentLikes+1}); // it assigns new object to currentLikes state for every object
    console.log(this.state.currentLikes);
  }

  render() {
    let stars = this.props.coursedetails.rating;
    let starArray = [];
    for (let i = 0; i < stars; i++) {
      starArray.push(<i className="fa-solid fa-star" key={i} style={{ color: "gold" }}></i>);
    }
    
    return (
    <div className="col-md-4">
      <div className="card">
        <img src={this.props.coursedetails.imageUrl} className="card-img-top" alt="" width="200px"/>
        <h1 className="card-title">{this.props.coursedetails.title}</h1>
        <p className="card-text">₹ {this.props.coursedetails.price}</p>
        <p className="card-text">Rating : {starArray}</p>

        <button
        onClick={()=>this.incrementLikes()
        }
        className="btn btn-primary" 
        >
        <i className="fa-solid fa-thumbs-up" width="100px" height="10px"></i> {this.state.currentLikes}</button>
      </div>
    </div>
    );
  }
}