//Create a react component thet uses useref to toggle the visibility of a div when a button is clicked
import React,{useRef, useState} from "react";
 
function First(){
    const i=useRef(null);
    const setVisible=()=>{
        if(i.current){
            {i.current.style.display=i.current.style.display==='block'?'none':'block'}
        }
    }
    return(
    <div style={{width:'600px',height:'500px',backgroundColor:'yellow',margin:'30px'}}>
        <button onClick={setVisible} style={{backgroundColor:'grey'}}>Click</button>
        <div ref={i} style={{margin:'50px',display:'block', width:'130px',height:'120px',backgroundColor:'red'}}>
        </div>
   
    </div>
    )
}

export default First;