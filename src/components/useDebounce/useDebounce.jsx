import { useEffect, useState } from "react"

function useDebounce(value,timeout){
const [debouncedValue,setDebouncedValue]=useState('')

useEffect(()=>{
let timer=setTimeout(()=>{
    setDebouncedValue(value)
},timeout*1000)

return()=>{
    clearTimeout(timer)
}
},[value,timeout])
return debouncedValue
}
function UseDebounceApp(){
    const[inputValue,setInputValue]=useState('')
    const debouncedValue=useDebounce(inputValue,2)
    return(
        <div>
            <p>{debouncedValue}</p>
            <input type="text"  name ="search-box" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        </div>
    )
}
export default UseDebounceApp;