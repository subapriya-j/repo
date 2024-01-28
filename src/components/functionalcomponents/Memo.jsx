import React,{useState} from "react";
const Memo=()=>{
    const [number,updateNumber]=useState(0);
    const list=[10,20]
    const [dark,updateTheme]=useState(false)
    const doubleNumber=useMemo(()=>{
         return doubleNumberSlow(number)
    },[number])
    function doubleNumberSlow(num){
        console.log("It is calling")
        for(let i=0;i<100000;i++){}
        return num*2;
    } 
    
}
    const theme= useMemo(()=>{

    return{
        backgroundColor:dark?"black":"White",
        color:dark?"white":"black"
       }
    },[dark])

    return(
        <div>This is a Dangerous hook which is called use Memo<br></br>
        <input type="number" value ={number} onChange={(event)=>updateNumber(event.target.value)}></input>
        <h2>The doubled number is{doubleNumber}</h2>
        <button onClick={()=>{updateTheme((prevdark)=>!prevdark)}}>Change Theme</button>
        <h2 style={theme}>The double Number is</h2>
        <ol>
                {list.map((val,index)=>(
                    <li key={index}>{val}</li>
                ))}
            </ol>
        </div>

    )

export default Memo;