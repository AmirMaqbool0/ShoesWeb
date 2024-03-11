import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData] =useState([])
    useEffect(()=>{
        const dataFetch = async () =>{
            
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'aa362e2ffbmshd4a0f0b470e20d4p141f70jsn96fd5a2c97bd',
                    'X-RapidAPI-Host': 'the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com'
                }
            };
            
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setData(result.hits)
            } catch (error) {
                console.error(error);
            }
        }
          dataFetch()
          return ()=> {}
    },[url])
   
return {data}
}

export default useFetch