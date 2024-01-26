import { useEffect,useState } from "react";
const About=()=>{
    const [tabName,setTabname]=useState("you are free from cold Don't take any pills to avvoid sideeffects")
    const updateTablet=()=>{
        setTabname("posts");
    }
    const updateTablet1=()=>{
        setTabname("comments");
    }
    const updateTablet2=()=>{
        setTabname("todos");
    }
    useEffect(()=>{
        console.log("https://jsonplaceholder.typicode.com/posts")
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => console.log(json));
    },[tabName]);
    return(
        <div>
            <h1>{tabName}</h1> 
            <button onDoubleClick={updateTablet}>Click me if you get cold</button>
            <button onDoubleClick={updateTablet1}>Click me if you get fever</button>
            <button onDoubleClick={updateTablet2}>Click me if you get epilepsy</button>
        </div>
    )
}
export default About;