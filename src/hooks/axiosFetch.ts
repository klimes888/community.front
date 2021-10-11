import { useState } from "react";
import axios, { AxiosResponse } from "axios"

type props = {
    method:'get' | 'post' | 'delete';
    url:string;
    data:{};
    params:{};    
}

    // const [fetchData, setFetchData] = useState<AxiosResponse | null>(null);
    const axiosFetch = () => {
        
        const _fetch = (method, url, data, params) => {
            console.log(url)
        return axios({
                method,
                url:`http://localhost:3000/api/${url}`,
                headers:{
                "Access-Control-Allow-Origin": "*",
                },
                data
            }).then( res => {
                console.log('res');
                return res
            }).catch( err => console.log(err))
        };
        return _fetch
    }

    export default axiosFetch;
    