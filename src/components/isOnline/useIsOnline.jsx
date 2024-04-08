import { useEffect, useState } from "react";

export function useIsOnline(){
    const [isOnline,setIsOnline]=useState(window.navigator.onLine);//this set the initial value as true if the user is connected to internet otherwise false
    useEffect(()=>{
        window.addEventListener("online",()=>{ // if u r connected to internet then this event will show online
            setIsOnline(true);
        })
        window.addEventListener("offline",()=>{    // similarly this will show opposite
            setIsOnline(false);
        })
        return ()=>{
            window.removeEventListener("online",()=>{
                setIsOnline(true);
            })
            window.removeEventListener("offline",()=>{
                setIsOnline(false);
            })
        }
    },[])
    return isOnline
}