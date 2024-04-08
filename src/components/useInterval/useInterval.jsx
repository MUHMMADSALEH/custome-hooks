import { useEffect, useState } from "react";

function useInterval(fn,timeout){
useEffect(()=>{
    setInterval(()=>{
fn();
    },timeout)
},[])
} 
function UseIntervalApp(){
    const [count,setCount]=useState(0)
    useInterval(()=>{
        setCount(c=>c+1)
    },1000)
    return <div>
        count is:{count}
    </div>
}
export default UseIntervalApp