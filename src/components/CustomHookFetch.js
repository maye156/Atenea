import { useEffect, useState } from "react";
//Custom hook para consumir un api
export const useFetch =(url) => {
    const [data, setData] = useState(null);

    useEffect (()=>{
        fetch(url)
        .then((res)=> res.json())
        .then((data) => setData(data))
    }, [url]);
    return [data];
};
