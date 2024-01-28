
import React, { useState} from "react";

const Callback = () => {
    const [count, setCount] = useState(0);
    const list=[10,20,30,40,50]
    const list1=[...list,60,70,100,200,300]
    const filterlist= list1.filter((value)=> value <=100)
    const filterlist1= list1.filter((value)=> value >100)
    list.forEach(element => {
        console.log(element)
    });
    
    return (
        <div>
            <h1>This is Call Back Example</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Add one</button><br></br>
            <ul>
                
                {filterlist.map((val,index)=>(
                    <li key={index}>{val}</li>
                ))}
            </ul>
            <h3>The values greater then 100</h3>
            <ol>
                
                {filterlist1.map((val,index)=>(
                    <li key={index}>{val}</li>
                ))}
            </ol>
        </div>
    );
}

export default Callback;