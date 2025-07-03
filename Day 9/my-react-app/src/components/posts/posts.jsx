import { useEffect, useState } from "react";// to define the asyn nature of the component
import axios from 'axios';
function Posts(){
    const[data, setData] = useState([]); // 1. states get created
    useEffect(function(){ // 3. useEffect is called after ever rendering, (thus goes in the cyclic loop of api calls for async operation), because async operation
        // to stop this cycle we use Dependecy list
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setData(res.data)); // here state changes and the jsx is rendered again
        
    }, []); // this [data] dependency list say if the data is fetched should the api call be made again for data. it says data change hua to vapas api call karo
    // if [] dependency list is empty it will not re-request api

    return ( // 2. jsx is rendered, li will not be during mounting phase.
        <div>
            <h1> All Posts</h1>
                <ul>
                    {
                        data.map(ele =>(
                            <li>{ele.title}</li>
                        ))
                    }
                </ul>
        </div>
    );
}

export default Posts;