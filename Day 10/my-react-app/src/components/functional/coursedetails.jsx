import { useParams } from "react-router-dom"; // useParams is an hook
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "../rating/rating";

function CourseDetails(props){
    const{ id } = useParams(); // params should be same as given in App.jsx while defining the Route
    const[course, setCourse] = useState([]);
    useEffect(function(){ // 3. useEffect is called after ever rendering, (thus goes in the cyclic loop of api calls for async operation), because async operation
        // to stop this cycle we use Dependecy list
        axios
        .get(`http://localhost:3000/courses/${id}`)
        .then(res => setCourse(res.data)); // here state changes and the jsx is rendered again
        
    }, []);

    return (
        <div>
            Course Details for {id}
            <div className="row">
                <div className="col-md-9">
                    <div className="card">
                        <img src={course.imageUrl} className="card-img-top" alt="" width="100%" />
                    </div>
                </div>
                <div className="col-md-3">
                    <h1 className="card-title">{course.title}</h1>
                    <p className="card-text">₹ {course.price}</p>
                    <div className="card-text">Rating : <Rating noofstars={course.rating} /></div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetails;