import { useIsOnline } from "./useIsOnline";

export function UseIsOnlineApp(){
    const isOnline=useIsOnline();
    if(isOnline) return <div> Your are online..</div>
    return <div>You are offline...</div>
}