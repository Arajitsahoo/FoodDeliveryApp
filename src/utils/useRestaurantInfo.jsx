import { useEffect, useState } from "react";
import { Menu_Api } from "./const";


const useRestaurantInfo = (resId) =>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        FetchInfo();
    },[]);

    const FetchInfo = async () =>{
        const res = await fetch(Menu_Api + resId);
        const json = await res.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantInfo;