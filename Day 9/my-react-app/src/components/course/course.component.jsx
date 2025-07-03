import React, { Component } from "react";

export default class Course extends Component {
  render() {
    return (
    <div className="col-md-4">
      <div className="card">
        <img src={this.props.coursedetails.imageUrl} className="card-img-top" alt="" width="200px"/>
        <h1 className="card-title">{this.props.coursedetails.title}</h1>
        <p className="card-text">₹ {this.props.coursedetails.price}</p>
        <p className="card-text">Rating : {this.props.coursedetails.rating}</p>
        <button>
            <i className="fa-solid fa-thumbs-up" width="100px" height="10px"></i>
        </button>
        <button className="btn btn-primary">{this.props.coursedetails.likes}</button>
      </div>
    </div>
    );
  }
}