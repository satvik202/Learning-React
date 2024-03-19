import { useState } from "react";
const useOnlineStatus =() =>{
    const [onlineStatus, setOnlineStatus] = useState(true);
    addEventListener("offline", () => {
        setOnlineStatus(false)
    });
    addEventListener("online", ()=>{
        setOnlineStatus(true)
    })
    return onlineStatus
}
export default useOnlineStatus