import { useState } from "react";

var Counter = () => {
    const[count, setCount] = useState(100); // 100 is the initial value of the state. useState methods returns a destructured array. setCount is defined by useState. Just pass the newer value 
    return <div>
        <p>
            Count : {count}
        </p>
        <button className="btn btn-primary" onClick={() => setCount(count+1)}>++</button> {/*setCount here assigns new object to the count object(Integer) and same diffing algo works here and the Actuall DOM is manipulated and the render method is called*/}
    </div>
}

export default Counter;