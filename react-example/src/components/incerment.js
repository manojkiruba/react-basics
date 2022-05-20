import React,{useState} from "react";

function Increment(){
  const[counter,setCounter]=useState(0);
  
    return(
       <div >
     <p>{counter}</p>
     <button onClick={()=>{setCounter(counter+1)}}>increment</button>
       </div>
    )
}
export default Increment;